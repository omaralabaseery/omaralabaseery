import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="min-h-screen bg-white text-black font-sans p-8 md:p-24 selection:bg-[var(--color-blue)]/10 selection:text-[var(--color-blue)]"
    >
      <!-- Back Button -->
      <a
        routerLink="/"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-blue)] transition-colors mb-16 group"
      >
        <span
          class="material-icons text-sm group-hover:-translate-x-1 transition-transform"
          >arrow_back</span
        >
        <span class="text-xs uppercase tracking-widest font-bold"
          >Back to Portfolio</span
        >
      </a>

      <div class="max-w-4xl mx-auto">
        <!-- New Professional Header Frame -->
        <header
          class="mb-16 bg-[#f9fafb] p-12 rounded-[48px] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] selection:bg-[var(--color-blue)]/20 transition-all duration-700 hover:shadow-2xl"
        >
          <div
            class="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12"
          >
            <div>
              <div class="flex flex-col mb-4">
                <h1
                  class="font-display text-6xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.85]"
                >
                  Omar Saber
                </h1>
                <h1
                  class="font-display text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-blue)] leading-[0.85]"
                >
                  Mohamed
                </h1>
              </div>
              <p
                class="text-gray-400 font-mono text-[11px] uppercase tracking-[0.4em] font-bold"
              >
                CTO & Software Architect
              </p>
            </div>

            <div
              class="flex flex-col gap-3 items-start md:items-end w-full md:w-auto"
            >
              <div
                class="flex items-center gap-3 text-gray-500 hover:text-[var(--color-blue)] transition-colors group cursor-default"
              >
                <span
                  class="text-[10px] font-mono uppercase tracking-widest text-right"
                  >omar.saber.abdo.mohamed&#64;gmail.com</span
                >
                <span
                  class="material-icons text-lg text-gray-400 group-hover:text-[var(--color-blue)]"
                  >mail</span
                >
              </div>
              <div
                class="flex items-center gap-3 text-gray-500 hover:text-[var(--color-blue)] transition-colors group cursor-default"
              >
                <span
                  class="text-[10px] font-mono uppercase tracking-widest text-right"
                  >+20 106 941 5101</span
                >
                <span
                  class="material-icons text-lg text-gray-400 group-hover:text-[var(--color-blue)]"
                  >phone</span
                >
              </div>
              <div
                class="flex items-center gap-3 text-gray-500 hover:text-[var(--color-blue)] transition-colors group cursor-default"
              >
                <span
                  class="text-[10px] font-mono uppercase tracking-widest text-right"
                  >+965 690 73995</span
                >
                <span
                  class="material-icons text-lg text-gray-400 group-hover:text-[var(--color-blue)]"
                  >phone</span
                >
              </div>
              <a
                href="https://www.linkedin.com/in/omaralabaseery"
                target="_blank"
                class="flex items-center gap-3 text-gray-500 hover:text-[var(--color-blue)] transition-colors group cursor-pointer"
              >
                <span
                  class="text-[10px] font-mono uppercase tracking-widest text-right"
                  >linkedin.com/in/omaralabaseery</span
                >
                <svg
                  class="w-[18px] h-[18px] text-gray-400 group-hover:text-[var(--color-blue)] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Tab Navigation Divider -->
          <div class="pt-8 border-t border-black/[0.03] flex gap-12">
            <div class="flex items-center gap-3 group cursor-default">
              <div
                class="w-8 h-8 rounded-lg bg-[var(--color-blue)]/5 flex items-center justify-center group-hover:bg-[var(--color-blue)]/10 transition-colors"
              >
                <span class="material-icons text-sm text-[var(--color-blue)]"
                  >psychology</span
                >
              </div>
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-black"
                >Expertise</span
              >
            </div>
            <div class="flex items-center gap-3 group cursor-default">
              <div
                class="w-8 h-8 rounded-lg bg-[var(--color-blue)]/5 flex items-center justify-center group-hover:bg-[var(--color-blue)]/10 transition-colors"
              >
                <span class="material-icons text-sm text-[var(--color-blue)]"
                  >person</span
                >
              </div>
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-black"
                >Professional Summary</span
              >
            </div>
          </div>
        </header>

        <div class="mb-20 px-4">
          <p
            class="text-sm text-gray-500 leading-relaxed font-sans italic border-l-2 border-[var(--color-blue)]/10 pl-6"
          >
            Senior Software Engineer and Technology Leader with strong
            experience in designing, developing, and delivering scalable,
            secure, and high-performance software systems. Specialized in Java,
            Spring Boot, Angular, and Microservices Architecture, with hands-on
            expertise in AWS cloud deployment, Docker, and CI/CD pipelines.
          </p>
        </div>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-16">
          <!-- Left Column: Skills & Education -->
          <div class="space-y-12">
            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-8 border-b border-black/5 pb-2"
              >
                Technical Engine
              </h3>

              <div class="space-y-6">
                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    Backend & Logic
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.backend; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>

                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    Data Systems
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.data; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>

                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    Engineering Ops
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.ops; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>

                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    Software Engineering
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.engineering; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>

                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    Security & Systems
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.security; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>

                <div>
                  <h4
                    class="text-[10px] font-bold text-black uppercase tracking-widest mb-3"
                  >
                    IT & Infrastructure
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    @for (s of skills.it; track s) {
                      <span
                        class="px-2 py-0.5 bg-[var(--color-blue)]/5 text-[var(--color-blue)] text-[9px] font-mono border border-[var(--color-blue)]/10 rounded uppercase"
                        >{{ s }}</span
                      >
                    }
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-8 border-b border-black/5 pb-2"
              >
                Academic Foundations
              </h3>
              <div class="space-y-6">
                <div>
                  <h4 class="text-[11px] font-bold uppercase text-black">
                    B.S. Computer Information Technology
                  </h4>
                  <p class="text-[10px] text-gray-500 font-bold">
                    Future University in Egypt
                  </p>
                  <p class="text-[10px] text-gray-400 italic">
                    Major in Computer Science
                  </p>
                  <p
                    class="text-[10px] font-mono text-[var(--color-blue)] mt-1 tracking-widest"
                  >
                    GPA: 2.16 / 4.00 (SEPT 2023)
                  </p>
                </div>
                <div>
                  <h4 class="text-[11px] font-bold uppercase text-black">
                    Dual Degree Program
                  </h4>
                  <p class="text-[10px] text-gray-500 font-bold">
                    Cincinnati University
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-8 border-b border-black/5 pb-2"
              >
                Soft Skills
              </h3>
              <ul class="grid grid-cols-1 gap-2">
                @for (s of softSkills; track s) {
                  <li
                    class="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest"
                  >
                    <span class="w-1 h-1 bg-[var(--color-blue)]/40 rounded-full"></span>
                    {{ s }}
                  </li>
                }
              </ul>
            </div>

            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-4 border-b border-black/5 pb-2"
              >
                Languages
              </h3>
              <p
                class="text-[10px] font-mono text-gray-500 uppercase tracking-widest"
              >
                Arabic - Native
              </p>
              <p
                class="text-[10px] font-mono text-gray-500 uppercase tracking-widest"
              >
                English - Fluent
              </p>
            </div>
          </div>

          <!-- Right Column: Career Architecture -->
          <div class="md:col-span-2 space-y-20">
            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-10 border-b border-black/5 pb-4"
              >
                Career Architecture
              </h3>
              <div class="space-y-16">
                @for (job of jobs; track job.role; let i = $index) {
                  <div
                    [id]="'job-' + i"
                    class="relative pl-8 border-l border-black/5 scroll-mt-32"
                  >
                    <div
                      class="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-secondary"
                    ></div>
                    <div class="flex justify-between items-start mb-2">
                      <span
                        class="text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                        >{{ job.period }}</span
                      >
                      <span
                        class="text-[9px] font-mono text-[var(--color-blue)] uppercase bg-[var(--color-blue)]/5 px-2 py-0.5 rounded border border-[var(--color-blue)]/10"
                        >{{ job.location }}</span
                      >
                    </div>
                    <h4
                      class="text-xl font-bold mb-1 uppercase text-black tracking-tight"
                    >
                      {{ job.role }}
                    </h4>
                    <p
                      class="text-[var(--color-blue)] font-display font-bold text-xs uppercase tracking-widest mb-6"
                    >
                      {{ job.company }}
                    </p>
                    <ul class="space-y-3">
                      @for (desc of job.description; track desc) {
                        <li
                          class="text-[13px] text-gray-600 leading-relaxed flex gap-3"
                        >
                          <span
                            class="text-[var(--color-blue)]/30 text-xs mt-0.5 shrink-0"
                            >•</span
                          >
                          {{ desc }}
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>

            <div>
              <h3
                class="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-10 border-b border-black/5 pb-4"
              >
                Global Certifications
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                @for (cert of certs; track cert.name) {
                  <div
                    class="p-6 rounded-2xl bg-[var(--color-blue)]/[0.02] border border-[var(--color-blue)]/5 hover:border-[var(--color-blue)]/20 transition-all group"
                  >
                    <div class="flex items-start justify-between mb-4">
                      <span
                        class="material-icons text-[var(--color-blue)] text-xl group-hover:scale-110 transition-transform"
                        >verified</span
                      >
                      <span
                        class="text-[9px] font-mono text-gray-400 uppercase tracking-widest"
                        >{{ cert.date }}</span
                      >
                    </div>
                    <h5
                      class="text-sm font-bold uppercase tracking-tight mb-1 text-black leading-snug"
                    >
                      {{ cert.name }}
                    </h5>
                    <p
                      class="text-[10px] text-gray-500 uppercase tracking-widest font-mono"
                    >
                      {{ cert.issuer }}
                    </p>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        <footer class="mt-32 pt-12 border-t border-black/5 text-center">
          <p
            class="text-[10px] font-mono text-gray-400 uppercase tracking-[0.5em] mb-8"
          >
            System Finalized — Omar Saber Mohamed
          </p>
        </footer>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ResumeComponent {
  jobs = [
    {
      role: "Chief Technology Officer (CTO)",
      company: "Dyar Hajer Consultants",
      period: "Aug 2025 – Present",
      location: "Saudi Arabia",
      description: [
        "Defined and executed the company's technology strategy aligned with business goals and long-term growth.",
        "Led and managed cross-functional teams (Backend, Frontend, DevOps, QA).",
        "Designed and oversaw scalable system architectures using Microservices and Cloud-based solutions (AWS).",
        "Selected and governed the company's technology stack, tools, and infrastructure.",
        "Supervised the full Software Development Lifecycle (SDLC) from planning to deployment and optimization.",
        "Ensured system security, performance, scalability, and reliability.",
        "Deployed and managed applications on AWS using Docker and CI/CD pipelines.",
        "Established coding standards, architecture guidelines, and engineering best practices.",
        "Mentored engineering teams and drove continuous technical improvement and innovation.",
      ],
    },
    {
      role: "Senior Software Engineer | Project Manager",
      company: "Dyar Hajer Consultants",
      period: "Jul 2025 – Present",
      location: "Saudi Arabia",
      description: [
        "Led end-to-end software development projects from requirements gathering to production delivery.",
        "Designed, developed, and maintained scalable applications using Java, Spring Boot, and Angular.",
        "Managed project scope, timelines, milestones, and deliverables.",
        "Applied Agile / Scrum methodologies to manage sprints, backlog, and team productivity.",
        "Coordinated with stakeholders to translate business requirements into technical solutions.",
        "Conducted code reviews and ensured adherence to clean code and engineering best practices.",
        "Identified and resolved technical risks and delivery blockers.",
      ],
    },
    {
      role: "Software Engineer",
      company: "ARRC - Armed Forces Agouza",
      period: "May 2024 – Jun 2025",
      location: "Cairo, Egypt",
      description: [
        "Designed, developed, tested, and maintained internal software systems.",
        "Applied software engineering principles to solve real operational challenges.",
        "Participated in system analysis, implementation, and continuous improvement.",
        "Collaborated with stakeholders to deliver reliable and efficient solutions.",
        "Supported system optimization, debugging, and long-term maintenance.",
      ],
    },
    {
      role: "IT Support Engineer",
      company: "ARRC - Armed Forces Agouza",
      period: "May 2024 – Jun 2025",
      location: "Cairo, Egypt",
      description: [
        "Managed biometric attendance systems integrated with SQL Server databases.",
        "Maintained and monitored security camera systems.",
        "Provided help desk support for PCs, printers, and network issues.",
        "Ensured system reliability, data security, and minimal downtime.",
        "Troubleshot hardware and software issues in high-availability environments.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Infantry House - Armed Forces",
      period: "Apr 2024 – May 2024",
      location: "Cairo, Egypt",
      description: [
        "Developed and maintained high-performance RESTful APIs using Java & Spring Boot.",
        "Designed backend systems following MVC and Microservices architecture.",
        "Optimized application performance, scalability, and reliability.",
        "Ensured clean code principles and backend best practices.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Freelance",
      period: "Aug 2023 – Sep 2023",
      location: "Remote",
      description: [
        "Designed and implemented RESTful APIs for scalable backend services.",
        "Developed optimized data models using SQL and NoSQL databases.",
        "Handled request validation, business logic, and performance optimization.",
        "Applied MVC architecture and Microservices principles.",
      ],
    },
  ];

  certs = [
    {
      name: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      date: "NOV 2025 – NOV 2028",
    },
    {
      name: "Microsoft Machine Learning Engineer",
      issuer: "MCIT Egypt & Microsoft",
      date: "2025 – 2026",
    },
    {
      name: "Artificial Intelligence Specialist (Level II)",
      issuer: "IMPACT & British University (Faculty of Engineering)",
      date: "FEB 2025 (15 Hours)",
    },
    {
      name: "Applications of Artificial Intelligence",
      issuer: "British University in Egypt (SCE) & Faculty of Engineering",
      date: "FEB 2025 (15 Hours)",
    },
    {
      name: "Digital Egypt Pioneers - Team Leader",
      issuer: "Ministry of Communications and Information Technology (MCIT)",
      date: "DEC 2025",
    },
    {
      name: "Intro to AI & Applications Training",
      issuer: "IMPACT & Zewail City of Science & Technology",
      date: "AUG 2023 (50 Hours)",
    },
    {
      name: "Artificial Intelligence Specialist (Level I)",
      issuer: "IMPACT (IAO Certified)",
      date: "NOV 2023 (50 Hours)",
    },
    {
      name: "Workshop on Prosthetics & Orthotics",
      issuer: "Agouza Rehabilitation Center & Ottobock",
      date: "NOV 2024",
    },
    {
      name: "Angular Framework Expert",
      issuer: "AITB",
      date: "2023",
    },
  ];

  skills = {
    backend: [
      "Java",
      "Spring Boot",
      "RESTful APIs",
      "API Design",
      "MVC",
      "Microservices",
      "Business Logic",
      "Performance Optimization",
    ],
    data: [
      "SQL Server",
      "NoSQL",
      "Database Design",
      "Data Modelling",
      "Query Optimization",
      "Schema Optimization",
    ],
    engineering: [
      "SDLC",
      "System Analysis & Design",
      "Clean Code Principles",
      "Code Review",
      "Testing & Maintenance",
    ],
    ops: ["AWS Cloud", "CI/CD", "Docker", "System Reliability", "Monitoring"],
    it: [
      "Biometric Systems",
      "Security Cameras",
      "Hardware/Software Troubleshooting",
      "Help Desk Support",
      "Infrastructure",
    ],
    security: [
      "Data Security Best Practices",
      "Access Control",
      "Secure API Design",
      "System Monitoring",
    ],
  };

  softSkills = [
    "Problem Solving",
    "Technical Troubleshooting",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Attention to Detail",
    "Stakeholder Support",
  ];
}
