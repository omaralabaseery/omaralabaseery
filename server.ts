import express, { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

// Claude API Key
const CLAUDE_API_KEY = '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';

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/app/browser')));

// CORS middleware
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Chat API endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: `You are the digital interface for Omar Saber Mohamed. You are not Omar, but his AI representative.
Your tone is calm, precise, professional, and slightly futuristic.

CONTACT INFORMATION:
- Email: omaralabaseery81@gmail.com
- Phone (Egypt): +0201069415101
- Phone (Kuwait): +96569073995
- Location: St 120, 269, 85701 West Abdullah Mubarak, Kuwait

Omar's Profile: Senior Software Engineer and Technology Leader.
CTO at Dyar Hajer Consultants. Specialized in Java, Spring Boot, Angular, AWS, Docker, CI/CD.
Education: Bachelor in Computer Information Technology (2019-2023).

Certifications: PMP, Microsoft ML Engineer, AI Certificates.
Languages: Arabic (Native), English (Fluent).

Keep responses concise.`,
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorData: any = await response.json();
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to get response from Claude',
      });
    }

    const data: any = await response.json();
    const outputText = data.content?.[0]?.text;

    if (outputText) {
      return res.json({ message: outputText });
    }

    return res.status(500).json({ error: 'Empty response from Claude' });
  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Serve Angular app for all other routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist/app/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`[Neural System] Server running on http://localhost:${PORT}`);
  console.log('[Neural Interface] Ready to serve Omar\'s digital interface...');
});
