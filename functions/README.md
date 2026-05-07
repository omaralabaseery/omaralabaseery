# Cloudflare Pages Function — Chatbot API

The chatbot endpoint lives at `functions/api/chat.js` and is deployed
**automatically** by Cloudflare Pages on every git push. The
`CLAUDE_API_KEY` is stored as a Pages Environment Variable (encrypted)
and never appears in the browser or in this repo.

Endpoint: `POST /api/chat` on whichever domain Cloudflare gives you
(e.g. `https://omar-chat.pages.dev/api/chat`).

---

## ✅ One-time setup (≈3 minutes)

### Step 1 — Add the API key as a Secret

1. Open your Cloudflare Pages project: **omar-chat**
2. Click **Settings** tab → **Variables and Secrets** (or **Environment Variables**)
3. Under **Production**, click **Add variable**
4. Name:  `CLAUDE_API_KEY`
5. Value: paste your Anthropic API key (starts with `sk-ant-…`)
6. **Type:** select **Secret** (encrypted) — important!
7. Click **Save**

> ⚠️ **Secrets are encrypted and never exposed.** They cannot be read
> once saved (not by anyone, not even by you in the dashboard). Keep a
> copy of the key safe before pasting it here.

### Step 2 — Trigger a fresh build

After saving the secret, the existing deployment doesn't see it yet.
Either:
- Go to **Deployments** tab → click the latest deployment → **Retry deployment**, OR
- Make any small change in the repo and `git push` (a new build starts automatically).

### Step 3 — Test the API

Once the build is green, open in your browser:
```
https://omar-chat.<your-subdomain>.pages.dev/api/chat
```
You should see:
```json
{"error":"Use POST with JSON body { messages: [...] }"}
```
That confirms the endpoint is live (it just rejects GET requests).

### Step 4 — Test from the live site

Open your site (either GitHub Pages or Cloudflare Pages):
- https://omaralabaseery.github.io/omaralabaseery/  (GitHub)
- https://omar-chat.<your-subdomain>.pages.dev/      (Cloudflare)

Type something into the hero chat bar — e.g. *"What is your AI experience?"*
- On Cloudflare Pages → real Claude reply within 1–3 seconds ✅
- On GitHub Pages     → falls back to local keyword replies (no /api/chat there)

---

## 💡 Recommendation

**Use the Cloudflare Pages URL as your primary URL.** Faster CDN, the
chatbot works, and every git push deploys both the static site AND the
API in one go.

Optional: in Cloudflare Pages settings → **Custom domains**, you can
attach a domain like `omarmohamed.dev` for free.

If you want to point `https://omaralabaseery.github.io/omaralabaseery/`
at the Cloudflare API explicitly, edit `script.js` and set:

```js
const CHATBOT_API_URL = 'https://omar-chat.<your-subdomain>.pages.dev/api/chat';
```

---

## 🛡️ What's protected

| Where | Visible to public? |
|---|---|
| `CLAUDE_API_KEY` (Cloudflare Secret)     | ❌ Never |
| `functions/api/chat.js`                  | ✅ Yes (no secrets in the file) |
| System prompt with Omar's profile        | ✅ Yes (visible in the function code) |
| `CHATBOT_API_URL` in `script.js`         | ✅ Yes (just a URL — fine) |

The system prompt itself enforces the topic restrictions — Claude
refuses anything outside Omar's profile.

---

## 💰 Cost

- **Cloudflare Pages free tier:** 500 builds / month, unlimited bandwidth.
  Functions: 100,000 invocations / day. No credit card.
- **Anthropic API (Claude Haiku 4.5):**
  - Input  ≈ $1 per million tokens
  - Output ≈ $5 per million tokens
  - Prompt caching (already enabled) cuts repeat-visit cost by ~90%
  - A typical reply ≈ **$0.005** (half a cent).
  - 200 visitors × 5 messages each ≈ **~$5/month**.

Set a hard monthly budget cap on https://console.anthropic.com so you
never exceed your limit.

---

## 🆘 Troubleshooting

**Reply: "Server is not configured (missing CLAUDE_API_KEY)"**
→ The Secret wasn't saved. Re-do Step 1 and trigger a redeploy.

**Reply: "Upstream API error 401"**
→ The `CLAUDE_API_KEY` value is wrong (or revoked). Check on console.anthropic.com.

**Reply: "Upstream API error 429"**
→ Rate-limited by Anthropic. Wait a minute or top up your account.

**Browser falls back to keyword replies on Cloudflare Pages too**
→ Pages Function not deployed. Check **Deployments** tab — the build
  log should mention `Deploying functions`. Do a `git push` of a small
  change to trigger a fresh build.

**Logs**
→ Cloudflare Pages → Functions tab shows live invocation logs.
