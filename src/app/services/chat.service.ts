import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

console.log('[Neural System] Core Build Date: 2026-02-25 19:40');

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private platformId = inject(PLATFORM_ID);

  // Knowledge base - statically stored responses
  private knowledgeBase: { [key: string]: string } = {
    'hello': 'Greetings! I am Omar\'s digital interface. I\'m trained on his architectural philosophy and career history. How can I assist you today?',
    'hi': 'Greetings! I am Omar\'s digital interface. I\'m trained on his architectural philosophy and career history. How can I assist you today?',
    'hey': 'Greetings! I am Omar\'s digital interface. I\'m trained on his architectural philosophy and career history. How can I assist you today?',

    'who are you': 'I am the digital interface for Omar Saber Mohamed. I represent his expertise, skills, and professional experience in software engineering and technology leadership.',
    'who is omar': 'Omar Saber Mohamed is a Senior Software Engineer and Technology Leader serving as CTO at Dyar Hajer Consultants. He specializes in Java, Spring Boot, Angular, AWS, Docker, and Microservices Architecture.',

    'experience': 'Omar\'s current roles:\n• CTO at Dyar Hajer Consultants (Aug 2025 – Present)\n• Senior Software Engineer & Project Manager at Dyar Hajer (Jul 2025 – Present)\n• Previously: Software Engineer at ARRC, Backend Developer at Infantry House, and Freelance Backend Developer.',
    'job': 'Omar is currently CTO and Senior Software Engineer at Dyar Hajer Consultants in Saudi Arabia.',
    'work': 'Omar\'s current roles:\n• CTO at Dyar Hajer Consultants (Aug 2025 – Present)\n• Senior Software Engineer & Project Manager at Dyar Hajer (Jul 2025 – Present)',

    'skills': 'Omar specializes in:\n• Backend: Java, Spring Boot, RESTful APIs, Microservices\n• Databases: SQL, SQL Server, NoSQL\n• Cloud & DevOps: AWS, Docker, CI/CD\n• Frontend: Angular Framework\n• Leadership and Project Management',
    'technology': 'Omar specializes in:\n• Backend: Java, Spring Boot, RESTful APIs, Microservices\n• Databases: SQL, SQL Server, NoSQL\n• Cloud & DevOps: AWS, Docker, CI/CD\n• Frontend: Angular Framework',
    'languages': 'Omar speaks:\n• Arabic (Native)\n• English (Fluent)',

    'education': 'Omar holds two Bachelor degrees in Computer Information Technology from:\n• Future University in Egypt (2019 - 2023)\n• Cincinnati University (2019 - 2023)',
    'degree': 'Omar has Bachelor degrees in Computer Information Technology from Future University in Egypt and Cincinnati University.',

    'certifications': 'Omar\'s recent certifications include:\n• Project Management Professional (PMP) – PMI & EYOUTH (2025 – 2026)\n• Microsoft Machine Learning Engineer – MCIT Egypt (2025 – 2026)\n• Artificial Intelligence Certificate – British University in Egypt (2025)\n• Artificial Intelligence Certificate – Zewail City (2023)\n• Angular Framework Certificate – AITB (2023)',
    'certificate': 'Omar holds multiple certifications including PMP, Microsoft ML Engineer, and AI Certificates from top institutions.',

    'contact': 'You can reach Omar at:\n📧 Email: omaralabaseery81@gmail.com\n📱 Phone (Egypt): +0201069415101\n📱 Phone (Kuwait): +96569073995\n📍 Location: St 120, 269, 85701 West Abdullah Mubarak, Kuwait',
    'email': 'Omar\'s email: omaralabaseery81@gmail.com',
    'phone': 'Omar\'s phone numbers:\n📱 Egypt: +0201069415101\n📱 Kuwait: +96569073995',
    'hire': 'If you\'re interested in hiring Omar, please contact him at:\n📧 omaralabaseery81@gmail.com\n📱 +0201069415101 (Egypt) or +96569073995 (Kuwait)',
    'collaborate': 'For collaboration opportunities, reach out to Omar at:\n📧 omaralabaseery81@gmail.com\n📱 +0201069415101 (Egypt) or +96569073995 (Kuwait)',

    'java': 'Omar is highly skilled in Java and Spring Boot, specializing in building scalable RESTful APIs and Microservices Architecture.',
    'angular': 'Omar has extensive experience with Angular Framework and holds an Angular Framework Certificate from AITB (2023).',
    'aws': 'Omar is proficient in AWS cloud deployment, Docker containerization, and CI/CD pipelines.',
    'docker': 'Omar has hands-on expertise in Docker containerization as part of his cloud and DevOps skills.',
    'microservices': 'Omar specializes in Microservices Architecture, designing scalable and resilient distributed systems.',
    'spring boot': 'Omar is highly skilled in Spring Boot for building enterprise applications and RESTful APIs.',
    'sql': 'Omar has expertise in SQL, SQL Server, and NoSQL databases with strong database design and optimization skills.',
    'cto': 'Omar currently serves as CTO at Dyar Hajer Consultants, leading technology strategy and architecture.',
    'leadership': 'Omar has proven ability to lead cross-functional teams, manage full software development lifecycles, and translate business requirements into technical solutions.',

    'thanks': 'You\'re welcome! Is there anything else you\'d like to know about Omar?',
    'thank you': 'You\'re welcome! Is there anything else you\'d like to know about Omar?',
    'bye': 'Goodbye! Feel free to reach out to Omar directly if you need more information: omaralabaseery81@gmail.com',
    'goodbye': 'Goodbye! Feel free to reach out to Omar directly if you need more information: omaralabaseery81@gmail.com',
  };

  constructor() {
    this.initializeAI();
  }

  private initializeAI() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('[Neural Interface] Initializing cognitive architecture (v4.0 - Static Intelligence)...');
      console.log('[Neural Interface] Static knowledge base loaded. Logic online.');
    } else {
      console.warn('[Neural Interface] Initialization deferred: Not a browser environment.');
    }
  }

  public setApiKey(key: string) {
    console.log('[Neural Interface] No API key needed - using static intelligence');
  }

  public resetApiKey() {
    console.log('[Neural Interface] Static system reset');
  }

  public isConfigured(): boolean {
    return true;
  }

  async sendMessage(message: string): Promise<string> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const lowerMessage = message.toLowerCase().trim();

    // Direct match
    for (const [key, response] of Object.entries(this.knowledgeBase)) {
      if (lowerMessage === key || lowerMessage.includes(key)) {
        return response;
      }
    }

    // Keyword matching
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('develop')) {
      return 'Omar has experience building scalable systems, microservices architectures, and enterprise applications. His projects span backend development, cloud deployment, and full-stack solutions.';
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
      return 'I can help you learn about Omar\'s experience, skills, certifications, education, and how to contact him. What would you like to know?';
    }

    if (lowerMessage.includes('how') && lowerMessage.includes('contact')) {
      return 'You can reach Omar at:\n📧 Email: omaralabaseery81@gmail.com\n📱 Phone (Egypt): +0201069415101\n📱 Phone (Kuwait): +96569073995';
    }

    if (lowerMessage.includes('what') && lowerMessage.includes('do')) {
      return 'Omar is a CTO and Senior Software Engineer specializing in Java, Spring Boot, Angular, AWS, Docker, and Microservices Architecture. He leads technology initiatives and builds scalable solutions.';
    }

    // Default response
    return 'I appreciate your question! To better assist you, I can help with information about Omar\'s experience, skills, education, certifications, or how to contact him. What interests you most?';
  }
}
