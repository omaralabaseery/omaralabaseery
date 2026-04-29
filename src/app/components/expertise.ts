import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-4 md:px-20 bg-[#f8f9fa] relative overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style="background-image: radial-gradient(circle, #004024 0.5px, transparent 0.5px); background-size: 40px 40px;">
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-24">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-mono text-[9px] uppercase tracking-widest text-secondary">
            <span class="material-icons text-[10px]">architecture</span>
            Core Competencies
          </div>
          <h2 class="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase mb-2 text-black leading-none">
            Technical <span class="text-secondary/30">Engine</span>
          </h2>
          <p class="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em]">Engineering Excellence for Modern Enterprises</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Architectural Strategy (Large Card) -->
          <div class="md:col-span-2 premium-card-white rounded-[40px] p-12 relative overflow-hidden group">
            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/[0.03] blur-[100px] rounded-full group-hover:bg-secondary/[0.05] transition-all duration-700"></div>
            
            <div class="relative z-10">
              <h3 class="text-4xl font-display font-black mb-6 text-black tracking-tight leading-[0.9]">Architectural Strategy</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-12 max-w-lg">
                Designing resilient microservices and distributed systems that scale with business growth. Focused on high-availability, performance, and future-proof digital foundations.
              </p>
              
              <div class="flex flex-wrap gap-2">
                @for (tag of ['Microservices', 'Event-Driven', 'Scalability', 'DDD', 'Cloud Native']; track tag) {
                  <span class="px-5 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-secondary group-hover:border-secondary/20 transition-all">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          </div>

          <!-- Technical Leadership -->
          <div class="premium-card-white rounded-[40px] p-10 group">
            <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-secondary/5 transition-all">
              <span class="material-icons text-gray-400 group-hover:text-secondary transition-colors text-2xl">leaderboard</span>
            </div>
            <h3 class="text-2xl font-display font-black mb-4 text-black tracking-tight leading-none">Technical Leadership</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Orchestrating cross-functional teams and defining technology roadmaps as a CTO. Bridging the gap between business goals and code.
            </p>
          </div>

          <!-- Cloud Orchestration -->
          <div class="premium-card-white rounded-[40px] p-10 group">
            <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-secondary/5 transition-all">
              <span class="material-icons text-gray-400 group-hover:text-secondary transition-colors text-2xl">cloud_done</span>
            </div>
            <h3 class="text-2xl font-display font-black mb-4 text-black tracking-tight leading-none">Cloud Orchestration</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Leveraging AWS and containerization to build automated, secure, and cost-effective deployment pipelines.
            </p>
          </div>

          <!-- System Reliability (New Extension to fill grid) -->
          <div class="premium-card-white rounded-[40px] p-10 group">
            <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-secondary/5 transition-all">
              <span class="material-icons text-gray-400 group-hover:text-secondary transition-colors text-2xl">security</span>
            </div>
            <h3 class="text-2xl font-display font-black mb-4 text-black tracking-tight leading-none">System Reliability</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Implementing zero-trust architecture and high-performance monitoring to ensure enterprise-grade stability.
            </p>
          </div>
        </div>

        <!-- Bottom Row Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 border-t border-black/5 pt-20">
          @for (stat of stats; track stat.label) {
            <div class="text-center group cursor-default">
              <p class="text-5xl md:text-6xl font-display font-black text-black mb-2 tracking-tighter group-hover:text-secondary transition-colors">
                {{ stat.value }}<span class="text-secondary/40 group-hover:text-secondary transition-all">+</span>
              </p>
              <p class="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-600 transition-colors">
                {{ stat.label }}
              </p>
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
export class ExpertiseComponent {
  stats = [
    { value: '4', label: 'Years Experience' },
    { value: '15', label: 'Projects Delivered' },
    { value: '10', label: 'Tech Stacks' },
    { value: '25', label: 'Systems Deployed' }
  ];
}
