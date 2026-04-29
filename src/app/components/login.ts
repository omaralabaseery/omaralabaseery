import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="min-h-screen bg-[#062617] flex items-center justify-center p-4 grid-bg relative selection:bg-accent selection:text-white"
    >
      <!-- Background elements for style -->
      <div class="absolute inset-0 pointer-events-none opacity-20">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 blur-[100px] rounded-full"
        ></div>
      </div>

      <div
        class="bg-[#052b1b] border border-white/5 rounded-[2rem] p-10 w-full max-w-md shadow-2xl relative z-10 hover:border-accent/20 transition-colors duration-500"
      >
        <div class="text-center mb-10">
          <div
            class="w-16 h-16 rounded-2xl bg-accent/10 mx-auto flex items-center justify-center mb-6 border border-accent/20 shadow-[0_0_20px_rgba(107,157,126,0.15)] relative overflow-hidden"
          >
            <span class="material-icons text-accent text-3xl z-10"
              >admin_panel_settings</span
            >
            <!-- scan line effect -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent -translate-y-full animate-[scan_3s_linear_infinite]"
            ></div>
          </div>
          <h1
            class="font-display text-4xl font-extrabold text-white uppercase tracking-tight mb-2"
          >
            Admin Portal
          </h1>
          <p
            class="text-[9px] font-mono text-accent uppercase tracking-[0.3em] font-bold"
          >
            Restricted Access Area
          </p>
        </div>

        <form (ngSubmit)="login()" class="space-y-6">
          <div class="group">
            <label
              class="block text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-accent transition-colors"
              >Identification</label
            >
            <div class="relative">
              <span
                class="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm group-focus-within:text-accent transition-colors"
                >badge</span
              >
              <input
                type="text"
                [(ngModel)]="username"
                name="username"
                class="w-full bg-black/20 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-black/40 transition-all font-mono text-sm placeholder-gray-600 shadow-inner"
                placeholder="Enter Admin ID"
              />
            </div>
          </div>
          <div class="group">
            <label
              class="block text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-accent transition-colors"
              >Security Key</label
            >
            <div class="relative">
              <span
                class="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm group-focus-within:text-accent transition-colors"
                >vpn_key</span
              >
              <input
                type="password"
                [(ngModel)]="password"
                name="password"
                class="w-full bg-black/20 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-black/40 transition-all font-mono text-sm placeholder-gray-600 shadow-inner"
                placeholder="Enter Passcode"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-accent hover:bg-accent/80 text-[#062617] font-extrabold py-4 px-4 rounded-xl uppercase tracking-[0.2em] text-[11px] transition-all mt-10 hover:shadow-[0_0_20px_rgba(107,157,126,0.4)] hover:-translate-y-0.5 relative overflow-hidden group/btn"
          >
            <span class="relative z-10">Initialize Session</span>
            <div
              class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"
            ></div>
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-white/5 text-center">
          <a
            routerLink="/"
            class="text-[9px] font-mono text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <span class="material-icons text-[14px]">arrow_back</span> Return to
            public net
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes scan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    `,
  ],
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(private router: Router) {}

  login() {
    // Basic mock authentication
    if (this.username || this.password) {
      this.router.navigate(["/admin"]);
    } else {
      // In a real app we would show an error message
      this.router.navigate(["/admin"]);
    }
  }
}
