import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-32 px-4 md:px-20 bg-white relative overflow-hidden">
      <!-- Background Grid -->
      <div
        class="absolute inset-0 opacity-[0.05] pointer-events-none"
        style="background-image: linear-gradient(#062617 1px, transparent 1px), linear-gradient(90deg, #062617 1px, transparent 1px); background-size: 50px 50px;"
      ></div>

      <div class="max-w-7xl mx-auto relative z-10 w-full">
        <!-- Header Section -->
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div class="max-w-2xl">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062617]/5 border border-[#062617]/10 mb-6 font-mono text-[9px] uppercase tracking-widest text-[#062617]"
            >
              <span class="material-icons text-[10px]">work_history</span>
              Professional Journey
            </div>
            <h2
              class="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase mb-6 text-[#062617] leading-none"
            >
              Career<br /><span class="text-[#062617]/40">History</span>
            </h2>
            <p
              class="text-[#062617]/70 font-mono text-[10px] uppercase tracking-[0.3em]"
            >
              A chronological log of technical leadership & architectural
              impact.
            </p>
          </div>
          <div class="flex gap-4 mb-2">
            <div
              class="px-6 py-2 bg-[#062617]/5 border border-[#062617]/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-[#062617]"
            >
              Exp: 4+ Years
            </div>
          </div>
        </div>

        <!-- Grid Layout for Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 relative w-full">
          @for (job of jobs; track i; let i = $index) {
            <a
              [routerLink]="['/resume']"
              [fragment]="'job-' + i"
              class="block bg-[#052b1b] rounded-xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col h-full border border-white/5 hover:border-[#6b9d7e]/60 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(107,157,126,0.3)] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] cursor-pointer"
              [ngClass]="
                i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
              "
            >
              <!-- Header: Date & Arrow Button -->
              <div
                class="flex justify-between items-start mb-10 w-full relative z-10"
              >
                <span
                  class="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#6b9d7e] font-bold"
                  >{{ job.period }}</span
                >
                <div
                  class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#6b9d7e]/20 group-hover:border-[#6b9d7e]/60 group-hover:shadow-[0_0_15px_rgba(107,157,126,0.5)] transition-all duration-300 shrink-0 overflow-hidden relative"
                >
                  <!-- Animated Arrow -->
                  <div
                    class="relative w-full h-full flex items-center justify-center"
                  >
                    <span
                      class="material-icons text-[18px] text-[#6b9d7e] absolute transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
                      >north_east</span
                    >
                    <span
                      class="material-icons text-[18px] text-white absolute -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                      >north_east</span
                    >
                  </div>
                </div>
              </div>

              <!-- Title & Company -->
              <h3
                class="text-3xl md:text-[32px] font-sans lg:font-display font-extrabold mb-3 text-white tracking-tight leading-tight w-full pr-4 relative z-10"
              >
                {{ job.role }}
              </h3>
              <p
                class="text-[#6b9d7e] font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-10 relative z-10"
              >
                {{ job.company }}
              </p>

              <!-- Description List -->
              <ul class="space-y-4 mb-12 flex-grow relative z-10">
                @for (desc of job.description; track desc) {
                  <li
                    class="text-[13px] text-[#a4c2b0] flex gap-4 items-start leading-relaxed font-semibold tracking-wide"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-[#6b9d7e] mt-2 shrink-0 transition-colors opacity-80"
                    ></span>
                    <span class="flex-1">{{ desc }}</span>
                  </li>
                }
              </ul>

              <!-- Skills Tags -->
              <div class="flex flex-wrap gap-3 mt-auto relative z-10">
                @for (skill of job.skills; track skill) {
                  <span
                    class="px-4 py-2 bg-transparent border border-[#3e6a51] rounded-md font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#82b392] group-hover:bg-[#3e6a51]/50 group-hover:text-white transition-colors"
                  >
                    {{ skill }}
                  </span>
                }
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ExperienceComponent {
  jobs: Experience[] = [
    {
      role: "Chief Technology Officer (CTO)",
      company: "Dyar Hajer Consultants",
      period: "Aug 2025 – Present",
      description: [
        "Defining technology strategy aligned with business growth.",
        "Leading cross-functional teams (Backend, Frontend, DevOps, QA).",
        "Designing scalable Microservices & Cloud solutions on AWS.",
        "Mentoring engineering teams and driving technical innovation.",
      ],
      skills: ["Leadership", "AWS", "Microservices", "DevOps", "CI/CD"],
    },
    {
      role: "Senior Software Engineer | PM",
      company: "Dyar Hajer Consultants",
      period: "Jul 2025 – Present",
      description: [
        "End-to-end development from requirements to production delivery.",
        "Java, Spring Boot, and Angular architectural leadership.",
        "Agile/Scrum management of sprints and team productivity.",
      ],
      skills: ["Java", "Spring Boot", "Angular", "Agile", "PM"],
    },
    {
      role: "Software Engineer",
      company: "ARRC - Armed Forces Agouza",
      period: "May 2024 – Jun 2025",
      description: [
        "Designed and maintained internal high-availability systems.",
        "Solved operational challenges with engineering principles.",
        "Collaborated with stakeholders for enterprise-grade solutions.",
      ],
      skills: ["System Design", "Optimization", "Enterprise", "Java"],
    },
    {
      role: "IT Support Engineer",
      company: "ARRC - Armed Forces Agouza",
      period: "May 2024 – Jun 2025",
      description: [
        "Managed biometric systems integrated with SQL databases.",
        "Ensured high-availability and minimal system downtime.",
        "Troubleshot complex hardware/software infrastructure issues.",
      ],
      skills: ["Infrastructure", "Security", "SQL Server", "Network"],
    },
    {
      role: "Backend Developer",
      company: "Infantry House",
      period: "Apr 2024 – May 2024",
      description: [
        "Designed and implemented robust backend web services.",
        "Collaborated with frontend teams to integrate RESTful APIs.",
        "Optimized database queries and ensured data integrity.",
      ],
      skills: ["Java", "Spring Boot", "REST APIs", "Backend"],
    },
  ];
}
