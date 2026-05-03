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
    <!-- Floating Chat Widget -->
    <div class="fixed right-1/4 top-1/3 z-50 w-96 flex flex-col gap-3">
      <!-- Messages Container (Expands upward when open) -->
      <div
        #messagesContainer
        class="overflow-y-auto transition-all duration-500 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20"
        [style.maxHeight]="isOpen() ? '350px' : '0px'"
        [style.display]="isOpen() ? 'block' : 'none'"
      >
        <div class="px-4 py-4 space-y-4">
          @for (msg of messages(); track msg.timestamp) {
            <div
              class="flex flex-col gap-2 max-w-xs"
              [class.ml-auto]="msg.sender === 'user'"
              [class.items-end]="msg.sender === 'user'"
              [class.items-start]="msg.sender === 'ai'"
            >
              <div
                class="px-4 py-2 rounded-lg text-sm leading-relaxed"
                [class.bg-[var(--color-blue)]]="msg.sender === 'user'"
                [class.text-white]="msg.sender === 'user'"
                [class.bg-white/10]="msg.sender === 'ai'"
                [class.text-white/90]="msg.sender === 'ai'"
                [class.border]="msg.sender === 'ai'"
                [class.border-white/20]="msg.sender === 'ai'"
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
      </div>

      <!-- Input Bar (Always visible) -->
      <div>
        <form
          (ngSubmit)="sendMessage()"
          class="flex gap-2 items-center bg-white/20 rounded-full px-4 py-3 border border-white/30 hover:border-white/50 focus-within:border-[var(--color-blue)] transition-all"
        >
          <!-- Toggle Messages Button -->
          <button
            type="button"
            (click)="toggleChat()"
            class="text-white/40 hover:text-white transition-colors"
          >
            <span class="material-icons text-lg">{{ isOpen() ? 'expand_more' : 'expand_less' }}</span>
          </button>

          <!-- Left Action Buttons -->
          <button type="button" class="text-white/40 hover:text-white transition-colors">
            <span class="material-icons text-lg">add</span>
          </button>
          <button type="button" class="text-white/40 hover:text-white transition-colors">
            <span class="material-icons text-lg">public</span>
          </button>
          <button type="button" class="text-white/40 hover:text-white transition-colors">
            <span class="material-icons text-lg">tune</span>
          </button>

          <!-- Input Field -->
          <input
            [(ngModel)]="userInput"
            name="userInput"
            type="text"
            placeholder="Ask anything..."
            class="flex-1 bg-transparent text-sm text-white placeholder-white/40 outline-none"
            autocomplete="off"
          />

          <!-- Right Action Buttons -->
          <button type="button" class="text-white/40 hover:text-white transition-colors">
            <span class="material-icons text-lg">mic</span>
          </button>
          <button
            type="submit"
            [disabled]="!userInput.trim() || isTyping()"
            class="w-8 h-8 rounded-full bg-[var(--color-blue)] hover:bg-[#0052a3] text-white disabled:opacity-30 transition-all flex items-center justify-center shrink-0"
          >
            <span class="material-icons text-sm">arrow_upward</span>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChatbotComponent {
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
