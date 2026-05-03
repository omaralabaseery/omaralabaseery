import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-4 md:px-20 bg-[var(--color-bg-dark)] relative overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 32px 32px;">
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="mb-24">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 font-mono text-[9px] uppercase tracking-widest text-white/80">
            <span class="material-icons text-[10px]">settings_suggest</span>
            Strategic Value
          </div>
          <h2 class="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase mb-6 text-white leading-none">
            Scale<br><span class="text-white/40">Solutions</span>
          </h2>
          <p class="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em]">
            Engineering Excellence for Modern Enterprises
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.title) {
            <div class="premium-card-dark p-10 rounded-[40px] relative overflow-hidden group">
              <!-- Glow -->
              <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
              
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                  <span class="material-icons text-white/30 group-hover:text-white transition-colors text-3xl">
                    {{ service.icon }}
                  </span>
                </div>

                <h3 class="text-2xl font-display font-bold mb-4 text-white group-hover:text-white transition-colors tracking-tight">
                  {{ service.title }}
                </h3>
                
                <p class="text-white/50 text-sm leading-relaxed mb-10 font-sans">
                  {{ service.desc }}
                </p>

                <ul class="space-y-4">
                  @for (feature of service.features; track feature) {
                    <li class="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-white transition-all">
                      <span class="w-1.5 h-px bg-white/20 group-hover:w-3 group-hover:bg-white transition-all"></span>
                      {{ feature }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'CTO as a Service',
      icon: 'architecture',
      desc: 'Strategic technology leadership for startups and scale-ups. Defining tech roadmaps, hiring strategies, and scalable foundations.',
      features: ['Tech Roadmap', 'Team Scaling', 'Architecture Audit']
    },
    {
      title: 'Cloud Native Dev',
      icon: 'cloud_sync',
      desc: 'Building applications designed for the cloud. High-availability, auto-scaling, and secure serverless architectures.',
      features: ['AWS / Cloud Native', 'Kubernetes / Docker', 'CI/CD Pipelines']
    },
    {
      title: 'AI Integration',
      icon: 'auto_awesome',
      desc: 'Implementing intelligent features into existing products. From AI orchestration to custom high-performance models.',
      features: ['AI Orchestration', 'Vector Databases', 'Intelligent Agents']
    }
  ];
}
