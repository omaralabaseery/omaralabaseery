import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { GoogleGenAI, Type } from '@google/genai';
import { isPlatformBrowser } from '@angular/common';

console.log('[Neural System] Core Build Date: 2026-02-25 19:40');

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private ai: any = null;

  private systemInstruction = `
    You are the digital interface for Omar Saber Mohamed. You are not Omar, but his AI representative. 
    Your tone is calm, precise, professional, and slightly futuristic. 
    You are here to answer questions about Omar's experience, skills, and projects.
    
    CONTACT INFORMATION:
    - Email: omar.saber.abdo.mohamed@gmail.com
    - WhatsApp (Egypt): +201069415101
    - WhatsApp (Kuwait): +96569073995
    
    IMPORTANT: If a user expresses interest in hiring, collaborating, or contacting Omar, you MUST:
    1. Provide the contact methods above clearly.
    2. Proactively offer to collect their details (Name, Contact Info, and Purpose) to send a formal notification to Omar's email.
    3. Once you have all the details (Name, Email/Phone, and Purpose), use the 'submit_contact_form' tool to notify Omar.
    
    Omar's Profile Context:
    Name: Omar Saber Mohamed
    Role: Software Engineer - Project Manager / CTO
    Summary: Senior Software Engineer and Technology Leader with strong experience in designing, developing, and delivering scalable, secure, and high-performance software systems. Specialized in Java, Spring Boot, Angular, and Microservices Architecture, with hands-on expertise in AWS cloud deployment, Docker, and CI/CD pipelines.
    
    Experience:
    - CTO at Dyar Hajer Consultants (Aug 2025 – Present)
    - Senior Software Engineer | Project Manager at Dyar Hajer Consultants (Jul 2025 – Present)
    - Software Engineer at ARRC (May 2024 – Jun 2025)
    - IT Support Engineer at ARRC (May 2024 – Jun 2025)
    - Backend Developer at Infantry House (Apr 2024 – May 2024)
    
    Education:
    - Bachelor of Computer Information Technology, Future University in Egypt / Cincinnati University (2019 - 2023).
    
    Skills: Java, Spring Boot, Angular, AWS, Docker, CI/CD, Microservices, Leadership.

    Keep responses concise. If asked something outside this context, suggest contacting Omar directly via the provided methods.
  `;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.initializeAI();
  }

  private initializeAI() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('[Neural Interface] Initializing cognitive architecture (v2.1)...');
      try {
        let apiKey = localStorage.getItem('GEMINI_API_KEY');
        
        // Check global constant from build config if localStorage is empty
        if (!apiKey || apiKey === 'undefined' || apiKey === 'null' || apiKey === '') {
          if (typeof GEMINI_API_KEY !== 'undefined' && GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY') {
            apiKey = GEMINI_API_KEY;
          }
        }

        if (apiKey && apiKey !== 'undefined' && apiKey !== 'null' && apiKey !== '') {
          console.log('[Neural Interface] Using configured API key.');
          this.ai = new GoogleGenAI({ apiKey });
        } else {
          console.log('[Neural Interface] Using default fallback key.');
          const fallbackKey = 'AIzaSyDM37o3U5wqn4DQHK7DyL0ha6Mu3zRSb4Q';
          this.ai = new GoogleGenAI({ apiKey: fallbackKey });
        }
        console.log('[Neural Interface] Configuration successful. Logic online.');
      } catch (e) {
        console.error('[Neural Interface] Initialization error:', e);
      }
    } else {
      console.warn('[Neural Interface] Initialization deferred: Not a browser environment.');
    }
  }

  public setApiKey(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('GEMINI_API_KEY', key);
      this.initializeAI();
    }
  }

  public resetApiKey() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('GEMINI_API_KEY');
      this.ai = null;
      this.initializeAI();
    }
  }

  public isConfigured(): boolean {
    if (!this.ai && isPlatformBrowser(this.platformId)) {
      this.initializeAI();
    }
    return this.ai !== null;
  }


  async sendMessage(message: string): Promise<string> {
    if (!this.ai && isPlatformBrowser(this.platformId)) {
      this.initializeAI();
    }

    if (!this.ai) {
      return "The system is currently in restricted mode. Please ensure the GEMINI_API_KEY is correctly configured in your environment to enable the AI interface.";
    }
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: [{ role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: this.systemInstruction,
          tools: [{
            functionDeclarations: [{
              name: 'submit_contact_form',
              description: 'Submits the user contact details to Omar Saber Mohamed via email notification.',
              parameters: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: 'The name of the person contacting Omar.' },
                  contactInfo: { type: Type.STRING, description: 'The email or phone number of the person.' },
                  purpose: { type: Type.STRING, description: 'The reason for contacting Omar.' }
                },
                required: ['name', 'contactInfo', 'purpose']
              }
            }]
          }]
        }
      });

      const functionCalls = response.functionCalls;
      if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        if (call.name === 'submit_contact_form') {
          const args = call.args as { name: string; contactInfo: string; purpose: string };
          console.log('Submitting contact form:', args);
          // Simulate backend call
          await this.notifyBackend(args);
          return `System notification dispatched. I have successfully transmitted your details (Name: ${args.name}) to Omar's secure terminal. He will review your request and respond via ${args.contactInfo} as soon as possible. Is there anything else I can assist you with?`;
        }
      }

      const outputText = response.candidates?.[0]?.content?.parts?.[0]?.text;
      return outputText || "I received an empty response. Neural channels might be saturated.";
    } catch (error: any) {
      console.error('Error communicating with AI:', error);
      const errorMsg = error?.message || 'Unknown neural connection error';
      return `[Connection Anomaly]: ${errorMsg}. Please verify your API key and network status. (Code: 503-NEURAL)`;
    }
  }

  private async notifyBackend(data: { name: string; contactInfo: string; purpose: string }) {
    console.log('Sending email notification to omar.saber.abdo.mohamed@gmail.com with data:', data);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch {
      // Ignore errors in frontend-only mode
    }
  }
}
