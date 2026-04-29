import {
  ChangeDetectionStrategy,
  Component,
  signal,
  HostListener,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero";
import { AboutComponent } from "./about";
import { ExperienceComponent } from "./experience";
import { ExpertiseComponent } from "./expertise";
import { ServicesComponent } from "./services";
import { PlaygroundComponent } from "./playground";
import { ChatbotComponent } from "./chatbot";
import { RouterLink } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ExpertiseComponent,
    ServicesComponent,
    PlaygroundComponent,
    ChatbotComponent,
    RouterLink,
  ],
  template: `
    <main
      class="bg-white min-h-screen text-black selection:bg-accent selection:text-white font-sans relative"
    >
      <!-- Floating Header -->
      <header
        class="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 pointer-events-none transition-all duration-500"
        [class.pt-2]="scrolled()"
        [class.md:pt-4]="scrolled()"
      >
        <div
          class="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto glass-panel px-6 py-3 rounded-2xl transition-all duration-500"
          [class.bg-white/80]="scrolled()"
          [class.shadow-2xl]="scrolled()"
          [class.border-black/10]="scrolled()"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,107,63,0.2)]"
            >
              <span class="material-icons text-white text-lg">bolt</span>
            </div>
            <span
              class="font-display font-extrabold tracking-tighter text-xl uppercase"
              >OMAR <span class="text-accent">SABER</span></span
            >
          </div>

          <nav class="hidden lg:flex gap-8 items-center">
            <a
              href="#about"
              class="text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
              >About</a
            >
            <a
              href="#experience"
              class="text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
              >Experience</a
            >
            <a
              href="#expertise"
              class="text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
              >Expertise</a
            >
            <a
              href="#services"
              class="text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
              >Services</a
            >
          </nav>

          <div class="flex items-center gap-4">
            <a
              routerLink="/resume"
              class="hidden md:block text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
              >Resume</a
            >
            <button
              class="btn-primary text-[11px] tracking-widest uppercase px-6"
            >
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <app-hero id="home"></app-hero>

      <app-about id="about"></app-about>
      <app-experience id="experience"></app-experience>
      <app-expertise id="expertise"></app-expertise>
      <app-services id="services"></app-services>
      <app-playground id="playground"></app-playground>

      <footer
        class="py-32 bg-[var(--color-secondary)] grid-bg relative border-t border-white/5 overflow-hidden text-white"
      >
        <!-- Background Glow -->
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none"
        ></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24"
          >
            <div class="lg:col-span-2">
              <div class="flex items-center gap-3 mb-8 group cursor-default">
                <div
                  class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
                >
                  <span class="material-icons text-white text-xl">bolt</span>
                </div>
                <span
                  class="font-display font-extrabold tracking-tighter text-2xl uppercase text-white"
                  >OMAR <span class="text-white/60">SABER</span></span
                >
              </div>
              <p class="text-gray-300 text-sm max-w-sm leading-relaxed mb-10">
                Architecting resilient digital ecosystems. Specializing in
                high-performance distributed systems and strategic technical
                leadership.
              </p>

              <div class="space-y-4">
                <div
                  class="flex items-center gap-4 text-gray-400 hover:text-accent transition-colors group cursor-pointer"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                  >
                    <span class="material-icons text-lg">code</span>
                  </div>
                  <span class="text-xs font-mono uppercase tracking-widest"
                    >omar.saber.abdo.mohamed&#64;gmail.com</span
                  >
                </div>
                <div
                  class="flex items-center gap-4 text-gray-400 hover:text-accent transition-colors group cursor-pointer"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                  >
                    <span class="material-icons text-lg">link</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <span
                      class="text-[10px] font-mono uppercase tracking-widest text-gray-500"
                      >+20 106 941 5101</span
                    >
                    <span
                      class="text-[10px] font-mono uppercase tracking-widest text-gray-500"
                      >+965 690 73995</span
                    >
                  </div>
                </div>
              </div>
            </div>

            @for (group of footerLinks; track group.title) {
              <div>
                <h4
                  class="font-display font-bold text-xs uppercase tracking-[0.25em] text-white/90 mb-8"
                >
                  {{ group.title }}
                </h4>
                <ul class="space-y-5">
                  @for (link of group.links; track link) {
                    <li>
                      <a
                        href="#"
                        class="text-gray-400 text-xs hover:text-accent transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span
                          class="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-all"
                        ></span>
                        {{ link }}
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }

            <!-- Social Links -->
            <div class="lg:col-span-2 relative z-50">
              <h4
                class="font-display font-bold text-xs uppercase tracking-[0.25em] text-white/90 mb-8"
              >
                Connect
              </h4>
              <div class="flex gap-4">
                <a
                  href="https://github.com/omaralabaseery"
                  target="_blank"
                  class="relative z-50 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:border-transparent hover:text-black text-gray-400 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/omaralabaseery"
                  target="_blank"
                  class="relative z-50 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent hover:text-white text-gray-400 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] cursor-pointer"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
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
          </div>

          <div
            class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10"
          >
            <div class="flex flex-col gap-2">
              <p
                class="font-mono text-[10px] text-gray-400 uppercase tracking-widest"
              >
                © {{ year }} — OMAR SABER MOHAMED.
              </p>
              <p
                class="font-mono text-[9px] text-gray-500 uppercase tracking-widest"
              >
                Crafted with precision and neural logic.
              </p>
            </div>
            <div class="flex gap-10">
              <a
                href="#"
                class="text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
                >Privacy</a
              >
              <a
                href="#"
                class="text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
                >Terms</a
              >
              <a
                href="#"
                class="text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
                >Cookies</a
              >
            </div>
          </div>
        </div>
      </footer>

      <app-chatbot></app-chatbot>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HomeComponent {
  year = new Date().getFullYear();
  scrolled = signal(false);

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (typeof window !== "undefined") {
      this.scrolled.set(window.scrollY > 50);
    }
  }

  footerLinks = [
    {
      title: "Navigation",
      links: ["About", "Experience", "Expertise", "Services", "Lab"],
    },
  ];
}
