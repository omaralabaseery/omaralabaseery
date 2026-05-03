import { Component, HostListener, PLATFORM_ID, inject } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section
      class="relative w-full overflow-hidden flex flex-col items-center pt-24 pb-12 min-h-[90vh] md:min-h-screen bg-white"
    >
      <!-- Subtle Background -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          class="absolute inset-0"
          style="background-image: radial-gradient(#0066cc 1px, transparent 1px); background-size: 40px 40px;"
        ></div>
        <!-- Linear fade at bottom -->
        <div
          class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        ></div>
      </div>

      <!-- Main Interactive Content Area -->
      <div
        class="relative w-full max-w-6xl h-[400px] sm:h-[450px] md:h-[500px] z-10 flex items-center justify-center mt-4 mb-4 lg:mb-8"
        [ngStyle]="{ opacity: contentOpacity }"
      >
        <!-- SVG Connections and Data Flow -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          @for (tool of tools; track tool.label; let i = $index) {
            <!-- Smooth Bezier Curve Connection Path -->
            <path
              [attr.d]="getBezierPath(tool)"
              fill="none"
              stroke="#00d4ff"
              stroke-width="0.15"
              class="opacity-60"
            />

            <!-- Outward Data Flow (White Dots) -->
            <circle r="0.6" fill="#0066cc" opacity="0.8">
              <animateMotion
                [attr.path]="getForwardPath(tool)"
                [attr.dur]="4 + (i % 3) + 's'"
                repeatCount="indefinite"
                [attr.begin]="'-' + i * 1.5 + 's'"
              />
            </circle>

            <!-- Inward Data Flow -->
            <circle r="0.4" fill="#00d4ff" opacity="0.8">
              <animateMotion
                [attr.path]="getReversePath(tool)"
                [attr.dur]="3 + (i % 2) + 's'"
                repeatCount="indefinite"
                [attr.begin]="'-' + i * 2.1 + 's'"
              />
            </circle>

            <!-- Endpoint dots on the node -->
            <circle
              [attr.cx]="tool.x"
              [attr.cy]="tool.y"
              r="0.4"
              fill="#ffffff"
              stroke="#00d4ff"
              stroke-width="0.2"
              class="opacity-80"
            />
          }
        </svg>

        <!-- Central AI Hub -->
        <div
          class="absolute z-20 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)] pulse-core"
          style="left: 50%; top: 50%; transform: translate(-50%, -50%);"
        >
          <div
            class="absolute inset-0 rounded-3xl bg-[#0066cc]/5 animate-ping opacity-20"
          ></div>
          <span
            class="material-icons text-[#0066cc] text-3xl sm:text-4xl mb-1 relative z-10"
            >bolt</span
          >
          <span
            class="font-bold text-[#0066cc] tracking-[0.2em] text-xs sm:text-sm relative z-10"
            >AI</span
          >
        </div>

        <!-- Peripheral Glass Nodes -->
        @for (tool of tools; track tool.label; let i = $index) {
          <div
            class="absolute flex flex-col items-center justify-center gap-2 z-10 cursor-default node-float"
            [ngStyle]="{
              'left.%': tool.x,
              'top.%': tool.y,
              transform: 'translate(-50%, -50%)',
              'animation-delay': i * 0.4 + 's',
            }"
          >
            <!-- White rounded-box -->
            <div
              class="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center group hover:border-[#00d4ff]/50 hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <img
                *ngIf="tool.img"
                [src]="tool.img"
                class="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                alt="{{ tool.label }}"
              />
              <span
                *ngIf="tool.icon"
                class="material-icons text-gray-400 group-hover:text-[#0066cc] transition-colors text-xl sm:text-2xl"
                >{{ tool.icon }}</span
              >
            </div>
            <!-- Node Label -->
            <span
              class="text-[7px] sm:text-[8px] font-bold text-gray-500 tracking-[0.1em] uppercase bg-white/80 px-2 py-0.5 rounded-full border border-gray-100"
              >{{ tool.label }}</span
            >
          </div>
        }
      </div>

      <!-- Bottom Typography Area -->
      <div
        class="relative z-30 text-center px-4 w-full flex flex-col items-center mt-2 lg:mt-8"
      >
        <h1
          class="font-display font-black uppercase text-black leading-[0.85] tracking-tighter flex flex-col items-center m-0 p-0 drop-shadow-sm"
        >
          <span
            class="text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] block tracking-normal"
            >ARCHITECTING</span
          >
          <div
            class="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 -mt-1 sm:-mt-2 md:-mt-4 relative"
          >
            <span
              class="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8.5rem] italic text-gray-200 font-mono relative z-10"
              style="-webkit-text-stroke: 1px rgba(0,0,0,0.1);"
              >THE</span
            >
            <span
              class="text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] block relative z-20"
              >FUTURE</span
            >
          </div>
        </h1>

        <p
          class="max-w-2xl text-gray-500 mt-6 md:mt-8 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
        >
          Omar Saber Mohamed — Senior Software Engineer and Technology<br
            class="hidden md:block"
          />
          Leader specializing in high-performance distributed systems,<br
            class="hidden md:block"
          />
          Microservices architecture, and resilient cloud infrastructure.
        </p>

        <div
          class="flex flex-row justify-center items-center gap-4 mt-8 lg:mt-10 mb-12"
        >
          <button
            class="px-6 py-3 md:px-8 md:py-3 w-36 sm:w-44 text-[9px] sm:text-xs font-bold tracking-[0.15em] uppercase rounded-full bg-[var(--color-blue)] text-white hover:bg-[#0052a3] transition-colors shadow-md cursor-pointer"
          >
            VIEW PROJECTS
          </button>
          <a
            routerLink="/resume"
            class="px-6 py-3 md:px-8 md:py-3 w-36 sm:w-44 text-[9px] sm:text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center rounded-full border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
          >
            VIEW RESUME
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .pulse-core {
        animation: breathGlow 4s ease-in-out infinite alternate;
      }
      @keyframes breathGlow {
        0% {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }
        100% {
          box-shadow: 0 8px 40px rgba(0, 102, 204, 0.15);
        }
      }
      .node-float {
        animation: floatNode 6s ease-in-out infinite alternate;
      }
      @keyframes floatNode {
        0% {
          margin-top: 0px;
          margin-left: 0px;
        }
        50% {
          margin-top: -6px;
          margin-left: 4px;
        }
        100% {
          margin-top: 4px;
          margin-left: -3px;
        }
      }
    `,
  ],
})
export class HeroComponent {
  private isBrowser: boolean;
  private platformId = inject(PLATFORM_ID);

  contentOpacity = 1;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  tools: {
    x: number;
    y: number;
    icon?: string;
    img?: string;
    label: string;
  }[] = [
    // Left Circle Arc
    { x: 32, y: 15, icon: "code", label: "PYTHON" },
    { x: 26, y: 35, icon: "psychology", label: "TENSORFLOW" },
    { x: 22, y: 55, icon: "auto_awesome", label: "PYTORCH" },
    { x: 26, y: 75, icon: "terminal", label: "DOCKER" },
    { x: 32, y: 95, icon: "cloud", label: "KUBERNETES" },

    // Right Circle Arc
    { x: 68, y: 15, icon: "forum", label: "OPENAI" },
    { x: 74, y: 35, icon: "hub", label: "LANGCHAIN" },
    { x: 78, y: 55, icon: "model_training", label: "GEMINI" },
    { x: 74, y: 75, icon: "storage", label: "AWS" },
    { x: 68, y: 95, icon: "dns", label: "AZURE" },
  ];

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event?: Event) {
    if (!this.isBrowser) return;
    const scrollPosition = window.scrollY;

    // Fade out nodes when scrolling down
    this.contentOpacity = Math.max(0, 1 - scrollPosition / 400);
  }

  // Pure SVG Path string from Node to the central Hub
  getBezierPath(tool: { x: number; y: number }): string {
    const isLeft = tool.x < 50;
    const startX = tool.x;
    const startY = tool.y;
    // Central Hub coordinates
    const endX = 50;
    const endY = 50;

    // Smooth bezier curves connecting to the center
    const controlPointX1 = isLeft
      ? startX + (endX - startX) * 0.5
      : startX - (startX - endX) * 0.5;
    const controlPointY1 = startY;

    const controlPointX2 = isLeft
      ? endX - (endX - startX) * 0.2
      : endX + (startX - endX) * 0.2;
    const controlPointY2 = endY;

    return `M ${startX} ${startY} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${endX} ${endY}`;
  }

  getForwardPath(tool: { x: number; y: number }): string {
    const isLeft = tool.x < 50;
    const startX = 50;
    const startY = 50;
    const endX = tool.x;
    const endY = tool.y;

    const controlPointX1 = isLeft
      ? startX - (startX - endX) * 0.2
      : startX + (endX - startX) * 0.2;
    const controlPointY1 = startY;

    const controlPointX2 = isLeft
      ? endX + (startX - endX) * 0.5
      : endX - (endX - startX) * 0.5;
    const controlPointY2 = endY;

    return `M ${startX} ${startY} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${endX} ${endY}`;
  }

  getReversePath(tool: { x: number; y: number }): string {
    return this.getBezierPath(tool);
  }
}
