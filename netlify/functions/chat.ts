import { Handler } from '@netlify/functions';

// Claude API Key - embedded directly
const CLAUDE_API_KEY = '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';

const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    if (!CLAUDE_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Claude API key not configured' }),
      };
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
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: errorData.error?.message || 'Failed to get response from Claude',
        }),
      };
    }

    const data = await response.json();
    const outputText = data.content?.[0]?.text;

    if (outputText) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: outputText }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Empty response from Claude' }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message || 'Internal server error' }),
    };
  }
};

export { handler };
