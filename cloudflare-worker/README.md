# Cloudflare Worker — Chatbot Proxy Setup

This Worker holds your `CLAUDE_API_KEY` securely on Cloudflare's servers,
so it never appears in the browser or in your public GitHub repo.

The frontend (`script.js`) just calls the Worker URL — no secrets in client code.

---

## ✅ One-time setup (≈10 minutes)

### Step 1 — Create the Worker

1. Open https://dash.cloudflare.com/?to=/:account/workers-and-pages
2. Click **Create** → **Create Worker**
3. Name it: **`omar-chat`** (or any name you like — just remember it)
4. Click **Deploy** (it deploys the default Hello-World code first; we'll replace it next)

### Step 2 — Replace the code

1. After deploy, click **Edit code** (top-right of the Worker page)
2. Open `worker.js` from this folder, copy **everything**
3. In the Cloudflare editor, **delete the existing code** and **paste** the contents of `worker.js`
4. Click **Deploy** (top right)

### Step 3 — Add the API key as a Secret

1. Go back to the Worker page (click the ← arrow if needed)
2. Click **Settings** tab → **Variables and Secrets**
3. Click **Add** → choose **Type: Secret**
4. Name:  `CLAUDE_API_KEY`
5. Value: paste your Anthropic API key (starts with `sk-ant-…`)
6. Click **Save**

> ⚠️ **Secrets are encrypted and never exposed.** They cannot be read once saved
> (not by anyone, not even by you in the dashboard). Make sure you saved a copy
> of the key somewhere safe before pasting it here.

### Step 4 — Copy your Worker URL

On the Worker overview page, look for the URL — it looks like:

```
https://omar-chat.<your-subdomain>.workers.dev
```

Copy that URL.

### Step 5 — Wire the frontend to your Worker

1. Open `script.js` (in the repo root)
2. Find this line near the top of the chatbot section:

   ```js
   const CHATBOT_API_URL = '';   // <-- paste your Worker URL here
   ```

3. Paste your Worker URL (without trailing slash):

   ```js
   const CHATBOT_API_URL = 'https://omar-chat.<your-subdomain>.workers.dev';
   ```

4. Save the file
5. Push to GitHub:

   ```bash
   git add script.js
   git commit -m "Wire chatbot to Cloudflare Worker"
   git push
   ```

GitHub Pages will rebuild automatically (~1 minute) and the chatbot will use Claude.

---

## 🧪 Test it

Open your live site:
https://omaralabaseery.github.io/omaralabaseery/

Type something into the hero chat bar — e.g. *"What is your experience with AI?"*
You should get a real Claude-powered reply within 1–3 seconds.

If it doesn't work:
- Cloudflare Worker → **Logs** tab shows live request logs and errors
- Browser DevTools → **Network** tab → look for the request to your Worker URL

---

## 🛡️ What's protected

| Where | Visible to public? |
|---|---|
| `CLAUDE_API_KEY` (Cloudflare Secret) | ❌ Never |
| Worker code (`worker.js`) | ✅ Yes (no secrets in it) |
| `CHATBOT_API_URL` in `script.js`     | ✅ Yes (just a URL — fine) |
| Conversation guardrails (system prompt) | ✅ Yes (visible in worker.js) |

Even though the Worker URL is public, only valid POST requests with proper
JSON get through — and Claude itself enforces the system prompt's restrictions
(only Omar-related topics).

---

## 💰 Cost

- **Cloudflare Workers free tier:** 100,000 requests/day. Free forever, no credit card.
- **Anthropic API (Claude Haiku 4.5):**
  - Input  ≈ $1 per million tokens
  - Output ≈ $5 per million tokens
  - With prompt caching enabled (already in `worker.js`), repeated visits are ~90% cheaper.
  - A typical chat reply uses ~2k tokens → roughly **$0.005 per reply** (half a cent).
  - 200 visitors × 5 messages each ≈ **$5/month**.

You can set a hard monthly budget cap on https://console.anthropic.com so you
never exceed what you want to spend.

---

## 🔧 Optional — restrict origins further

Open `worker.js` → find the `ALLOWED_ORIGINS` array. It already allows:
- `https://omaralabaseery.github.io`
- `http://localhost:5181` (for local development)

If you deploy the site to a custom domain later, add it to that list and
re-deploy the Worker.

---

## 🆘 Troubleshooting

**"Server is not configured (missing CLAUDE_API_KEY)"**
→ The Secret wasn't saved correctly. Re-do Step 3.

**"Upstream API error 401"**
→ The `CLAUDE_API_KEY` value is wrong (or revoked). Check it on console.anthropic.com.

**"Upstream API error 429"**
→ Rate-limited by Anthropic. Wait a minute and retry, or top up your account.

**CORS error in the browser**
→ The Origin isn't in `ALLOWED_ORIGINS`. Add it to `worker.js` and re-deploy.
