import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  inject,
  PLATFORM_ID,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatService } from "../services/chat.service";

interface Message {
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

@Component({
  selector: "app-chatbot",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none"
    >
      <!-- Chat Window -->
      <div
        #chatWindow
        class="mb-4 w-[90vw] md:w-[450px] pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden transform origin-bottom scale-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        [class.scale-100]="isOpen()"
        [class.opacity-100]="isOpen()"
        [class.-translate-y-4]="isOpen()"
      >
        <!-- Header -->
        <div
          class="p-6 border-b border-white/5 flex justify-between items-center bg-white/5"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_15px_rgba(0,107,63,0.8)] animate-pulse"
            ></div>
            <div class="flex flex-col">
              <span
                class="font-display font-black text-[10px] text-white uppercase tracking-[0.2em]"
                >My Assistance</span
              >
              <span
                class="text-[8px] font-mono uppercase tracking-widest text-gray-500"
                >System v4.0 — Online</span
              >
            </div>
          </div>
          <button
            (click)="toggleChat()"
            class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
          >
            <span class="material-icons text-sm">close</span>
          </button>
        </div>

        <!-- Messages -->
        <div
          #messagesContainer
          class="h-[450px] overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          @for (msg of messages(); track msg.timestamp) {
            <div
              class="flex flex-col gap-3 max-w-[85%]"
              [class.self-end]="msg.sender === 'user'"
              [class.self-start]="msg.sender === 'ai'"
              [class.items-end]="msg.sender === 'user'"
              [class.items-start]="msg.sender === 'ai'"
            >
              <div
                class="p-5 rounded-[24px] text-sm leading-relaxed font-sans shadow-xl"
                [class.bg-white]="msg.sender === 'user'"
                [class.text-black]="msg.sender === 'user'"
                [class.rounded-br-none]="msg.sender === 'user'"
                [class.bg-white/5]="msg.sender === 'ai'"
                [class.text-white/80]="msg.sender === 'ai'"
                [class.border]="msg.sender === 'ai'"
                [class.border-white/10]="msg.sender === 'ai'"
                [class.rounded-bl-none]="msg.sender === 'ai'"
              >
                {{ msg.text }}
              </div>
              <span
                class="text-[8px] text-gray-600 font-mono uppercase tracking-[0.2em] px-2"
                >{{ msg.timestamp | date: "shortTime" }}</span
              >
            </div>
          }

          @if (isTyping()) {
            <div
              class="flex gap-3 items-center p-4 bg-white/5 rounded-2xl border border-white/5 text-secondary text-[9px] font-mono uppercase tracking-widest animate-pulse max-w-fit"
            >
              <span
                class="w-1.5 h-1.5 bg-secondary rounded-full animate-ping"
              ></span>
              <span>Processing...</span>
            </div>
          }
        </div>

        <!-- Input -->
        <div class="p-6 border-t border-white/5 bg-black/60 backdrop-blur-xl">
          <form
            (ngSubmit)="sendMessage()"
            class="flex gap-4 p-2 bg-white/5 rounded-2xl border border-white/10 focus-within:border-secondary transition-colors"
          >
            <input
              [(ngModel)]="userInput"
              name="userInput"
              type="text"
              placeholder="Type a query..."
              class="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-gray-700 font-mono focus:ring-0 px-2"
              autocomplete="off"
            />
            <button
              type="submit"
              [disabled]="!userInput.trim() || isTyping()"
              class="w-10 h-10 rounded-xl bg-secondary text-white disabled:opacity-20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-[0_5px_15px_rgba(0,107,63,0.3)]"
            >
              <span class="material-icons text-xl">north_east</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Toggle Button -->
      <div class="relative pb-8 pointer-events-auto">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-secondary/20 blur-[60px] opacity-40 rounded-full animate-pulse transition-opacity duration-1000"
          [class.opacity-0]="isOpen()"
        ></div>

        <button
          (click)="toggleChat()"
          class="group relative w-20 h-20 rounded-full bg-secondary border border-white/10 flex items-center justify-center hover:bg-black transition-all duration-700 hover:scale-110 shadow-[0_20px_50px_rgba(0,64,36,0.4)] overflow-hidden"
        >
          <div
            class="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-700"
          ></div>

          <span
            class="material-icons text-white transition-all duration-700 text-3xl relative z-10"
            [class.rotate-180]="isOpen()"
          >
            {{ isOpen() ? "keyboard_arrow_down" : "bolt" }}
          </span>

          <div
            class="absolute inset-1 rounded-full border border-dashed border-white/10 group-hover:border-white/20 transition-all animate-spin-slow"
          ></div>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-spin-slow {
        animation: spin-slow 15s linear infinite;
      }
    `,
  ],
})
export class ChatbotComponent {
  @ViewChild("chatWindow") chatWindow!: ElementRef;
  @ViewChild("messagesContainer") messagesContainer!: ElementRef;

  private chatService = inject(ChatService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isOpen = signal(false);
  isTyping = signal(false);
  userInput = "";

  messages = signal<Message[]>([
    {
      text: "Greetings! I'm My Assistance, Omar's digital interface. I'm trained on his architectural philosophy and career history. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  toggleChat() {
    this.isOpen.set(!this.isOpen());
    if (this.isOpen()) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  async sendMessage() {
    if (!this.userInput.trim()) return;

    const userMsg = this.userInput;
    this.userInput = "";

    this.messages.update((msgs) => [
      ...msgs,
      { text: userMsg, sender: "user", timestamp: new Date() },
    ]);
    this.scrollToBottom();

    this.isTyping.set(true);

    try {
      const response = await this.chatService.sendMessage(userMsg);
      this.messages.update((msgs) => [
        ...msgs,
        { text: response, sender: "ai", timestamp: new Date() },
      ]);
      this.scrollToBottom();
    } catch (err) {
      console.error(err);
    } finally {
      this.isTyping.set(false);
    }
  }

  private scrollToBottom() {
    if (!this.isBrowser) return;
    if (this.messagesContainer) {
      const el = this.messagesContainer.nativeElement;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 50);
    }
  }
}
