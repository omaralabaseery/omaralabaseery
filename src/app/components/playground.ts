import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface ConnectionLink {
  id: string;
  path: string;
}

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-4 md:px-20 bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <!-- Section Header -->
      <div class="text-center mb-24 relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-blue)]/5 border border-[var(--color-blue)]/10 mb-6 font-mono text-[9px] uppercase tracking-widest text-[var(--color-blue)]">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] animate-pulse"></span>
          Neural Lab: Active
        </div>
        <h2 class="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase mb-6 text-black leading-none">
          AI Orchestration<br><span class="text-gray-400">Lab</span>
        </h2>
        <p class="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em]">Experimental Sandbox for Agentic Logic</p>
      </div>

      <!-- Orchestration Lab Area (Cyber-Premium Style) -->
      <div #playground class="relative w-full max-w-6xl h-[700px] border border-black/5 rounded-[48px] bg-[var(--color-bg-dark)] overflow-hidden group/canvas shadow-[0_40px_100px_rgba(0,102,204,0.15)] transition-all duration-700">
        
        <!-- Technical Pattern Overlay -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 40px 40px;">
        </div>

        <!-- Connection Lines (Neural Links) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          @for (line of connections; track line.id) {
            <path [attr.d]="line.path" 
                  class="stroke-white/10 fill-none" 
                  stroke-width="1.5" />
            
            <circle r="2" class="fill-white shadow-[0_0_15px_white]">
              <animateMotion [attr.path]="line.path" dur="3s" repeatCount="indefinite" />
            </circle>
          }
        </svg>

        <!-- Central AI Core (Multi-layered) -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-48 h-48 flex items-center justify-center">
            <!-- Layers of rotation -->
            <div class="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
            <div class="absolute inset-4 border border-white/5 border-dashed rounded-full animate-spin-reverse-slow"></div>
            <div class="absolute inset-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] rotate-45 group-hover/canvas:rotate-90 transition-transform duration-[2s]"></div>
            
            <div class="relative z-10 flex flex-col items-center">
              <span class="material-icons text-5xl text-white animate-pulse">bolt</span>
              <span class="mt-2 font-display font-black text-xl tracking-tighter text-white">AI</span>
            </div>

            <!-- Pulse -->
            <div class="absolute inset-0 bg-white/5 blur-[60px] rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Peripheral Tool Nodes (Premium Rounded) -->
        @for (item of items; track i; let i = $index) {
          <div class="absolute w-28 h-28 bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/20 hover:border-white/40 group/item cursor-grab active:cursor-grabbing z-10"
               [style.left.px]="item.x"
               [style.top.px]="item.y"
               (mousedown)="startDrag($event, i)">
            
            <div class="relative z-10 flex flex-col items-center">
              <span class="material-icons text-3xl text-white/40 group-hover/item:text-white transition-all duration-500 mb-2">
                {{ item.icon }}
              </span>
              <span class="font-display font-bold text-[9px] uppercase tracking-widest text-white/60 group-hover/item:text-white transition-colors">
                {{ item.label }}
              </span>
            </div>

            <!-- Connection point -->
            <div class="absolute w-2 h-2 bg-white/20 border border-white/40 rounded-full"
                 [class.right-0]="item.side === 'left'"
                 [class.left-0]="item.side === 'right'"
                 [class.translate-x-1/2]="item.side === 'left'"
                 [class.-translate-x-1/2]="item.side === 'right'">
            </div>
          </div>
        }

        <!-- Telemetry Data -->
        <div class="absolute bottom-10 left-10 font-mono text-[8px] text-white/30 uppercase tracking-[0.3em] space-y-2 pointer-events-none">
          <div class="flex items-center gap-4">
            <span class="w-1 h-1 rounded-full bg-[var(--color-cyan)] animate-ping"></span>
            SYNC STATUS: NOMINAL
          </div>
          <p>LOAD FACTOR: 0.142ms</p>
          <p>ACTIVE NODES: {{ items.length }}</p>
        </div>

        <!-- Corner HUD -->
        <div class="absolute top-10 right-10 flex gap-4 pointer-events-none">
          <div class="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-white/40 w-[65%]"></div>
          </div>
          <div class="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-white/40 w-[30%]"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse-slow {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    .animate-spin-slow { animation: spin-slow 15s linear infinite; }
    .animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
  `]
})
export class PlaygroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('playground') playgroundRef!: ElementRef<HTMLElement>;

  items = [
    { x: 100, y: 150, icon: 'code', label: 'Python', side: 'left', vx: 0, vy: 0 },
    { x: 150, y: 400, icon: 'psychology', label: 'TensorFlow', side: 'left', vx: 0, vy: 0 },
    { x: 800, y: 150, icon: 'api', label: 'OpenAI', side: 'right', vx: 0, vy: 0 },
    { x: 850, y: 400, icon: 'hub', label: 'LangChain', side: 'right', vx: 0, vy: 0 },
    { x: 500, y: 100, icon: 'cloud', label: 'AWS', side: 'left', vx: 0, vy: 0 }
  ];

  connections: ConnectionLink[] = [];
  private draggingItem: number | null = null;
  private animationFrameId = 0;
  private mouse = { x: 0, y: 0 };
  private isBrowser: boolean;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.animatePhysics();
      window.addEventListener('mousemove', this.onMouseMove.bind(this));
      window.addEventListener('mouseup', this.stopDrag.bind(this));
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
      window.removeEventListener('mousemove', this.onMouseMove.bind(this));
      window.removeEventListener('mouseup', this.stopDrag.bind(this));
    }
  }

  startDrag(e: MouseEvent, index: number) {
    if (!this.isBrowser) return;
    this.draggingItem = index;
  }

  stopDrag() {
    this.draggingItem = null;
  }

  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  animatePhysics() {
    if (!this.isBrowser) return;
    
    const rect = this.playgroundRef.nativeElement?.getBoundingClientRect();
    if (!rect) {
      this.animationFrameId = requestAnimationFrame(this.animatePhysics.bind(this));
      return;
    }

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    this.connections = [];

    this.items.forEach((item, i) => {
      if (this.draggingItem === i) {
        const targetX = this.mouse.x - rect.left - 56; 
        const targetY = this.mouse.y - rect.top - 56;
        item.vx += (targetX - item.x) * 0.2;
        item.vy += (targetY - item.y) * 0.2;
        item.vx *= 0.6;
        item.vy *= 0.6;
      } else {
        item.vx += Math.sin(Date.now() / 1500 + i) * 0.08;
        item.vy += Math.cos(Date.now() / 1500 + i) * 0.08;
        item.vx *= 0.96;
        item.vy *= 0.96;
      }

      item.x += item.vx;
      item.y += item.vy;

      // Boundary checks
      const pad = 40;
      if (item.x < pad) { item.x = pad; item.vx *= -0.5; }
      if (item.x > rect.width - 112 - pad) { item.x = rect.width - 112 - pad; item.vx *= -0.5; }
      if (item.y < pad) { item.y = pad; item.vy *= -0.5; }
      if (item.y > rect.height - 112 - pad) { item.y = rect.height - 112 - pad; item.vy *= -0.5; }

      const startX = item.side === 'left' ? item.x + 112 : item.x;
      const startY = item.y + 56;
      const endX = centerX + (item.side === 'left' ? -96 : 96);
      const endY = centerY;

      const cp1x = startX + (item.side === 'left' ? 120 : -120);
      const path = `M ${startX} ${startY} C ${cp1x} ${startY}, ${cp1x} ${endY}, ${endX} ${endY}`;

      this.connections.push({ id: `link-${i}`, path: path });
    });

    this.animationFrameId = requestAnimationFrame(this.animatePhysics.bind(this));
  }
}
