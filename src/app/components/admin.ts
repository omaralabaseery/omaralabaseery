import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="min-h-screen bg-[#062617] text-white p-4 md:p-8 lg:p-12 font-sans selection:bg-accent selection:text-[#062617] relative flex flex-col"
    >
      <!-- Background elements -->
      <div
        class="absolute top-0 right-0 w-1/2 h-96 bg-accent/5 blur-[150px] rounded-full pointer-events-none"
      ></div>

      <!-- Top Navigation -->
      <header
        class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-6 border-b border-white/10 relative z-10 gap-6"
      >
        <div class="flex items-center gap-6">
          <div
            class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20"
          >
            <span class="material-icons text-accent text-3xl"
              >admin_panel_settings</span
            >
          </div>
          <div>
            <h1
              class="font-display text-4xl font-extrabold uppercase tracking-tight text-white mb-1"
            >
              Command Center
            </h1>
            <p
              class="text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold"
            >
              System Analytics & Communications Hub
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-right hidden sm:block">
            <p
              class="text-[9px] font-mono text-gray-500 uppercase tracking-widest"
            >
              Admin
            </p>
            <p class="text-xs font-bold text-white uppercase tracking-wider">
              Omar Saber
            </p>
          </div>
          <button
            (click)="logout()"
            class="group flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-5 py-3 rounded-xl transition-all duration-300"
          >
            <span
              class="text-[10px] font-mono uppercase font-bold tracking-[0.2em] group-hover:pr-1 transition-all"
              >Terminate</span
            >
            <span class="material-icons text-sm">logout</span>
          </button>
        </div>
      </header>

      <!-- Statistics Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          class="bg-[#052b1b] border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-colors"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="material-icons text-accent text-sm">smart_toy</span>
            <p
              class="text-[9px] font-mono uppercase text-gray-400 tracking-widest"
            >
              Chat Sessions
            </p>
          </div>
          <p
            class="text-3xl font-display font-bold text-white border-l-2 border-accent pl-3"
          >
            {{ chatMessages.length }}
          </p>
        </div>
        <div
          class="bg-[#052b1b] border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-colors"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="material-icons text-accent text-sm">email</span>
            <p
              class="text-[9px] font-mono uppercase text-gray-400 tracking-widest"
            >
              Emails
            </p>
          </div>
          <p
            class="text-3xl font-display font-bold text-white border-l-2 border-accent pl-3"
          >
            {{ emails.length }}
          </p>
        </div>
        <div
          class="bg-[#052b1b] border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-colors"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="material-icons text-accent text-sm">visibility</span>
            <p
              class="text-[9px] font-mono uppercase text-gray-400 tracking-widest"
            >
              Page Views
            </p>
          </div>
          <p
            class="text-3xl font-display font-bold text-white border-l-2 border-accent pl-3"
          >
            1,024
          </p>
        </div>
        <div
          class="bg-[#052b1b] border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-colors"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="material-icons text-accent text-sm">update</span>
            <p
              class="text-[9px] font-mono uppercase text-gray-400 tracking-widest"
            >
              Last Update
            </p>
          </div>
          <p
            class="text-3xl font-display font-bold text-white border-l-2 border-accent pl-3 text-lg mt-1"
          >
            Today
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <!-- Chatbot Messages -->
        <section
          class="bg-[#052b1b] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col h-[500px]"
        >
          <div
            class="flex items-center justify-between mb-8 pb-4 border-b border-white/5"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center"
              >
                <span class="material-icons text-accent text-sm">forum</span>
              </div>
              <h2
                class="text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
              >
                Chatbot Intelligence
              </h2>
            </div>
            <button
              class="text-[9px] font-mono text-gray-400 hover:text-accent uppercase tracking-widest flex items-center gap-1"
            >
              <span class="material-icons text-[12px]">refresh</span> Sync
            </button>
          </div>

          <div class="flex-1 overflow-y-auto space-y-4 pr-3 custom-scrollbar">
            @for (msg of chatMessages; track msg.id) {
              <div
                class="bg-black/20 rounded-2xl p-5 border border-white/5 hover:border-accent/20 transition-all group"
              >
                <div class="flex justify-between items-start mb-3">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-2 h-2 rounded-full bg-accent animate-pulse"
                    ></div>
                    <span
                      class="text-[10px] font-mono text-white uppercase tracking-[0.1em] font-bold"
                      >{{ msg.user }}</span
                    >
                  </div>
                  <span
                    class="text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded"
                    >{{ msg.time }}</span
                  >
                </div>
                <p class="text-[13px] text-gray-300 leading-relaxed font-sans">
                  {{ msg.content }}
                </p>
              </div>
            }
          </div>
        </section>

        <!-- Emails / Contact Submissions -->
        <section
          class="bg-[#052b1b] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col h-[500px]"
        >
          <div
            class="flex items-center justify-between mb-8 pb-4 border-b border-white/5"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center"
              >
                <span class="material-icons text-accent text-sm"
                  >mark_email_unread</span
                >
              </div>
              <h2
                class="text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
              >
                Inbound Transmissions
              </h2>
            </div>
            <button
              class="text-[9px] font-mono text-gray-400 hover:text-accent uppercase tracking-widest flex items-center gap-1"
            >
              <span class="material-icons text-[12px]">filter_list</span> Filter
            </button>
          </div>

          <div class="flex-1 overflow-y-auto space-y-4 pr-3 custom-scrollbar">
            @for (email of emails; track email.id) {
              <div
                class="bg-black/20 rounded-2xl p-5 border border-white/5 hover:border-accent/20 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      class="text-sm font-bold text-white mb-1 tracking-tight"
                    >
                      {{ email.name }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="material-icons text-[10px] text-accent"
                        >email</span
                      >
                      <p
                        class="text-[10px] font-mono text-accent/80 tracking-wider"
                      >
                        {{ email.address }}
                      </p>
                    </div>
                  </div>
                  <span
                    class="text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded"
                    >{{ email.date }}</span
                  >
                </div>
                <div class="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p
                    class="text-[13px] text-gray-300 leading-relaxed font-sans italic"
                  >
                    {{ email.message }}
                  </p>
                </div>
                <div class="mt-4 flex gap-2">
                  <button
                    class="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg text-[9px] font-mono uppercase font-bold tracking-widest transition-colors"
                  >
                    Reply
                  </button>
                  <button
                    class="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-[9px] font-mono uppercase font-bold tracking-widest transition-colors"
                  >
                    Archive
                  </button>
                </div>
              </div>
            }
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(107, 157, 126, 0.4);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(107, 157, 126, 0.8);
      }
    `,
  ],
})
export class AdminDashboardComponent {
  chatMessages = [
    {
      id: 1,
      user: "visitor_942",
      time: "10:45 AM",
      content: "What are your rates for a custom enterprise web application?",
    },
    {
      id: 2,
      user: "hr_manager",
      time: "09:15 AM",
      content:
        "Do you have experience leading cross-functional teams larger than 10 people in an agile environment?",
    },
    {
      id: 3,
      user: "dev_guy",
      time: "Yesterday",
      content:
        "Love the portfolio. Did you build this with Angular 17 and Tailwind CSS?",
    },
    {
      id: 4,
      user: "startup_ceo",
      time: "2 Days Ago",
      content:
        "We need a CTO to scale our Microservices architecture on AWS. When can we talk?",
    },
  ];

  emails = [
    {
      id: 1,
      name: "Google Recruiters",
      address: "recruit@google.com",
      date: "Oct 24, 2026",
      message:
        "We were impressed by your profile and would love to schedule a preliminary interview for a Senior Engineering Management role.",
    },
    {
      id: 2,
      name: "Startup Founder",
      address: "founder@nextbigthing.io",
      date: "Oct 23, 2026",
      message:
        "Looking for a technical co-founder / CTO to help architect our initial MVP. We need someone who can design a scalable microservices architecture from day one.",
    },
    {
      id: 3,
      name: "Tech Conference",
      address: "speakers@devcon.org",
      date: "Oct 20, 2026",
      message:
        "We would love to invite you to speak at our upcoming conference about building resilient distributed systems in the cloud.",
    },
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(["/"]);
  }
}
