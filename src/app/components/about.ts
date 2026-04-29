import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-4 md:px-20 bg-secondary relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      <!-- Background Visuals -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 32px 32px;">
      </div>

      <div class="max-w-4xl mx-auto relative z-10 text-center">
        <!-- Central Orbital Visual -->
        <div class="relative flex flex-col items-center justify-center mb-20">
          <div class="relative w-96 h-96 flex items-center justify-center">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-white/5 blur-[120px] rounded-full"></div>
            
            <!-- Outer Circle -->
            <div class="absolute inset-0 border border-white/10 rounded-full"></div>
            <!-- Inner Dashed Circle -->
            <div class="absolute inset-16 border border-white/5 border-dashed rounded-full"></div>
            
            <!-- Orbital Light -->
            <div class="absolute inset-0 animate-spin-slow">
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
            </div>

            <!-- Core Icon -->
            <div class="relative z-10 flex items-center justify-center w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
              <span class="material-icons text-white/40 text-4xl">verified</span>
            </div>
          </div>

          <!-- Floating Core Value Card -->
          <div class="mt-12 md:mt-0 md:absolute md:-bottom-10 md:-left-20 bg-[#acc2b8]/90 backdrop-blur-xl p-8 rounded-[32px] max-w-xs shadow-2xl border border-white/20 text-left">
            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#004024]/60 mb-4 font-mono">Core Value</p>
            <p class="text-sm font-bold text-[#004024] leading-relaxed">
              "Trust is built through transparency and verifiable technical excellence."
            </p>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span class="font-mono text-[9px] uppercase tracking-widest text-white">The Philosophy</span>
          </div>
          
          <h2 class="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase mb-8 leading-[0.9] text-white">
            Human-Centric<br><span class="text-white/40">Architecture</span>
          </h2>
          
          <p class="text-xl text-gray-400 font-sans leading-relaxed mb-10">
            Technology should be invisible yet indispensable. My approach to software architecture focuses on creating systems that are not just powerful, but intuitive and resilient.
          </p>
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
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
  `]
})
export class AboutComponent {}
