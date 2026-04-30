import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

console.log('[Neural System] Core Build Date: 2026-02-25 19:40');

// Claude API Key - Direct Usage
const CLAUDE_API_KEY = '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';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private systemInstruction = `
    You are the digital interface for Omar Saber Mohamed. You are not Omar, but his AI representative.
    Your tone is calm, precise, professional, and slightly futuristic.
    You are here to answer questions about Omar's experience, skills, and projects.

    CONTACT INFORMATION:
    - Email: omaralabaseery81@gmail.com
    - Phone (Egypt): +0201069415101
    - Phone (Kuwait): +96569073995
    - Location: St 120, 269, 85701 West Abdullah Mubarak, Kuwait

    IMPORTANT: If a user expresses interest in hiring, collaborating, or contacting Omar, you MUST:
    1. Provide the contact methods above clearly.
    2. Proactively offer to collect their details (Name, Contact Info, and Purpose) to send a formal notification to Omar's email.
    3. Once you have all the details (Name, Email/Phone, and Purpose), use the 'submit_contact_form' tool to notify Omar.

    Omar's Profile Context:
    Name: Omar Saber Mohamed
    Role: Software Engineer - Project Manager / CTO
    Summary: Senior Software Engineer and Technology Leader with strong experience in designing, developing, and delivering scalable, secure, and high-performance software systems. Specialized in Java, Spring Boot, Angular, and Microservices Architecture, with hands-on expertise in AWS cloud deployment, Docker, and CI/CD pipelines. Proven ability to lead cross-functional teams, manage full software development lifecycles, and translate business requirements into robust technical solutions.

    Current Experience:
    - Chief Technology Officer (CTO) at Dyar Hajer Consultants, Saudi Arabia (Aug 2025 – Present)
    - Senior Software Engineer | Project Manager at Dyar Hajer Consultants, Saudi Arabia (Jul 2025 – Present)
    - Software Engineer at Armed Forces Agouza Rehabilitation & Rheumatology Center (ARRC), Cairo (May 2024 – Jun 2025)
    - IT Support Engineer at ARRC, Cairo (May 2024 – Jun 2025)
    - Backend Developer at Infantry House in Armed Forces of Egypt, Cairo (Apr 2024 – May 2024)
    - Backend Developer (Freelance – Remote) (Aug 2023 – Sep 2023)

    Education:
    - Bachelor of Computer Information Technology, Future University in Egypt (2019 - 2023)
    - Bachelor of Computer Information Technology, Cincinnati University (2019 - 2023)

    Certifications:
    - Project Management Professional (PMP) – PMI & EYOUTH (2025 – 2026)
    - Microsoft Machine Learning Engineer – MCIT Egypt (2025 – 2026)
    - Artificial Intelligence Certificate – British University in Egypt (2025)
    - Artificial Intelligence Certificate – Zewail City of Science & Technology (2023)
    - Angular Framework Certificate – AITB (2023)

    Technical Skills:
    - Backend: Java, Spring Boot, RESTful APIs, MVC/Microservices Architecture
    - Databases: SQL, SQL Server, NoSQL, Database Design & Optimization
    - Cloud & DevOps: AWS, Docker, CI/CD, Application Deployment
    - Frontend: Angular Framework
    - Engineering: Software Development Lifecycle (SDLC), Clean Code, Code Review, Testing
    - Infrastructure: Biometric Systems, Security Camera Systems, Hardware/Network Support
    - Security: Data Security, Secure API Design, Access Control

    Languages: Arabic (Native), English (Fluent)

    Soft Skills: Problem Solving, Technical Troubleshooting, Team Collaboration, Communication, Time Management, Stakeholder Support

    Keep responses concise. If asked something outside this context, suggest contacting Omar directly via the provided methods.
  `;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.initializeAI();
  }

  private initializeAI() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('[Neural Interface] Initializing cognitive architecture (v4.0 - Direct Claude)...');
      try {
        console.log('[Neural Interface] Direct API integration ready. Logic online.');
      } catch (e) {
        console.error('[Neural Interface] Initialization error:', e);
      }
    } else {
      console.warn('[Neural Interface] Initialization deferred: Not a browser environment.');
    }
  }

  public setApiKey(key: string) {
    console.log('[Neural Interface] API key configured');
  }

  public resetApiKey() {
    console.log('[Neural Interface] API key reset');
  }

  public isConfigured(): boolean {
    return true;
  }


  async sendMessage(message: string): Promise<string> {
    try {
      // Direct Claude API call
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
          system: this.systemInstruction,
          messages: [{ role: 'user', content: message }],
        }),
      });

      if (!response.ok) {
        const errorData: any = await response.json();
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }

      const data: any = await response.json();
      const outputText = data.content?.[0]?.text;

      if (outputText) {
        return outputText;
      }

      return "I received an empty response. Neural channels might be saturated.";
    } catch (error: any) {
      console.error('Error communicating with Claude:', error);
      const errorMsg = error?.message || 'Unknown neural connection error';
      return `[Connection Anomaly]: ${errorMsg}. Please verify network status is stable. (Code: 503-NEURAL)`;
    }
  }

  private async notifyBackend(data: { name: string; contactInfo: string; purpose: string }) {
    console.log('Sending email notification to omaralabaseery81@gmail.com with data:', data);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch {
      // Ignore errors
    }
  }
}
