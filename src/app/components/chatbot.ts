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
    <div class="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none pb-6">
      <!-- Chat Window -->
      <div
        #chatWindow
        class="w-[95vw] md:w-[600px] pointer-events-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform origin-bottom scale-0 opacity-0 transition-all duration-500 ease-out mb-4"
        [class.scale-100]="isOpen()"
        [class.opacity-100]="isOpen()"
        [class.-translate-y-2]="isOpen()"
      >
        <!-- Messages -->
        <div
          #messagesContainer
          class="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          @for (msg of messages(); track msg.timestamp) {
            <div
              class="flex flex-col gap-2 max-w-[85%]"
              [class.self-end]="msg.sender === 'user'"
              [class.self-start]="msg.sender === 'ai'"
              [class.items-end]="msg.sender === 'user'"
              [class.items-start]="msg.sender === 'ai'"
            >
              <div
                class="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                [class.bg-white/80]="msg.sender === 'user'"
                [class.text-black]="msg.sender === 'user'"
                [class.rounded-br-none]="msg.sender === 'user'"
                [class.bg-white/10]="msg.sender === 'ai'"
                [class.text-white/90]="msg.sender === 'ai'"
                [class.border]="msg.sender === 'ai'"
                [class.border-white/20]="msg.sender === 'ai'"
                [class.rounded-bl-none]="msg.sender === 'ai'"
              >
                {{ msg.text }}
              </div>
            </div>
          }

          @if (isTyping()) {
            <div class="flex gap-2 items-center text-white/60 text-sm">
              <span class="w-2 h-2 bg-white/60 rounded-full animate-bounce"></span>
              <span class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
              <span class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
            </div>
          }
        </div>

        <!-- Input -->
        <div class="p-4 border-t border-white/5 bg-white/5 backdrop-blur-xl">
          <form
            (ngSubmit)="sendMessage()"
            class="flex gap-3 items-center"
          >
            <input
              [(ngModel)]="userInput"
              name="userInput"
              type="text"
              placeholder="Ask anything..."
              class="flex-1 bg-white/10 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/30 transition-all"
              autocomplete="off"
            />
            <button
              type="submit"
              [disabled]="!userInput.trim() || isTyping()"
              class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white disabled:opacity-30 transition-all flex items-center justify-center"
            >
              <span class="material-icons text-lg">send</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Dock Bar -->
      <div class="pointer-events-auto px-4">
        <div class="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-3 flex items-center justify-between gap-4 shadow-lg">
          <div class="flex-1">
            <p class="text-white/70 text-sm">{{ isOpen() ? 'Chat open' : 'What are you working on?' }}</p>
          </div>
          <div class="flex items-center gap-3">
            <button
              (click)="toggleChat()"
              class="text-white/70 hover:text-white transition-colors"
            >
              <span class="material-icons text-xl">{{ isOpen() ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>
        </div>
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
