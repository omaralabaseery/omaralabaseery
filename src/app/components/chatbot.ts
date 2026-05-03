import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
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
    <!-- Floating Chat Widget (Centered) -->
    <div class="fixed left-1/2 transform -translate-x-1/2 top-1/3 z-50 w-96 flex flex-col gap-3">
      <!-- Messages Container (Expands upward when open) -->
      <div
        #messagesContainer
        class="overflow-y-auto transition-all duration-500 rounded-2xl backdrop-blur-xl"
        [class.bg-black/80]="isDarkBackground()"
        [class.border-white/30]="isDarkBackground()"
        [class.bg-white/70]="!isDarkBackground()"
        [class.border-black/20]="!isDarkBackground()"
        [class.border]="true"
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
                [class.text-white]="msg.sender === 'user' && isDarkBackground()"
                [class.text-black]="msg.sender === 'user' && !isDarkBackground()"
                [class.bg-white/20]="msg.sender === 'ai' && isDarkBackground()"
                [class.text-white/90]="msg.sender === 'ai' && isDarkBackground()"
                [class.border-white/30]="msg.sender === 'ai' && isDarkBackground()"
                [class.bg-black/10]="msg.sender === 'ai' && !isDarkBackground()"
                [class.text-black/80]="msg.sender === 'ai' && !isDarkBackground()"
                [class.border-black/20]="msg.sender === 'ai' && !isDarkBackground()"
                [class.border]="msg.sender === 'ai'"
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
          class="flex gap-2 items-center rounded-full px-4 py-3 transition-all"
          [class.bg-white/25]="isDarkBackground()"
          [class.border-white/40]="isDarkBackground()"
          [class.hover:border-white/60]="isDarkBackground()"
          [class.bg-black/15]="!isDarkBackground()"
          [class.border-black/30]="!isDarkBackground()"
          [class.hover:border-black/50]="!isDarkBackground()"
          [class.border]="true"
          [class.focus-within:border-[var(--color-blue)]]="true"
        >
          <!-- Toggle Messages Button -->
          <button
            type="button"
            (click)="toggleChat()"
            class="transition-colors"
            [class.text-white/40]="isDarkBackground()"
            [class.hover:text-white]="isDarkBackground()"
            [class.text-black/40]="!isDarkBackground()"
            [class.hover:text-black]="!isDarkBackground()"
          >
            <span class="material-icons text-lg">{{ isOpen() ? 'expand_more' : 'expand_less' }}</span>
          </button>

          <!-- Left Action Buttons -->
          <button type="button" class="transition-colors"
            [class.text-white/40]="isDarkBackground()"
            [class.hover:text-white]="isDarkBackground()"
            [class.text-black/40]="!isDarkBackground()"
            [class.hover:text-black]="!isDarkBackground()">
            <span class="material-icons text-lg">add</span>
          </button>
          <button type="button" class="transition-colors"
            [class.text-white/40]="isDarkBackground()"
            [class.hover:text-white]="isDarkBackground()"
            [class.text-black/40]="!isDarkBackground()"
            [class.hover:text-black]="!isDarkBackground()">
            <span class="material-icons text-lg">public</span>
          </button>
          <button type="button" class="transition-colors"
            [class.text-white/40]="isDarkBackground()"
            [class.hover:text-white]="isDarkBackground()"
            [class.text-black/40]="!isDarkBackground()"
            [class.hover:text-black]="!isDarkBackground()">
            <span class="material-icons text-lg">tune</span>
          </button>

          <!-- Input Field -->
          <input
            [(ngModel)]="userInput"
            name="userInput"
            type="text"
            placeholder="Ask anything..."
            class="flex-1 bg-transparent text-sm outline-none"
            [class.text-white]="isDarkBackground()"
            [class.placeholder-white/40]="isDarkBackground()"
            [class.text-black]="!isDarkBackground()"
            [class.placeholder-black/40]="!isDarkBackground()"
            autocomplete="off"
          />

          <!-- Right Action Buttons -->
          <button type="button" class="transition-colors"
            [class.text-white/40]="isDarkBackground()"
            [class.hover:text-white]="isDarkBackground()"
            [class.text-black/40]="!isDarkBackground()"
            [class.hover:text-black]="!isDarkBackground()">
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
export class ChatbotComponent implements AfterViewInit, OnDestroy {
  @ViewChild("messagesContainer") messagesContainer!: ElementRef;

  private chatService = inject(ChatService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isOpen = signal(false);
  isTyping = signal(false);
  isDarkBackground = signal(false);
  userInput = "";

  private observerInstance: IntersectionObserver | null = null;

  messages = signal<Message[]>([
    {
      text: "Greetings! I'm My Assistance, Omar's digital interface. I'm trained on his architectural philosophy and career history. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.setupBackgroundDetection();
  }

  ngOnDestroy() {
    if (this.observerInstance) {
      this.observerInstance.disconnect();
    }
  }

  private setupBackgroundDetection() {
    if (!this.isBrowser) return;

    // Detect which section is at the chat widget position
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            // If background is dark (like #0a0a0a), set isDarkBackground to true
            const isDark = this.isColorDark(bgColor);
            this.isDarkBackground.set(isDark);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -200px 0px', // Check at the chat widget position
      }
    );

    // Observe all main sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Also observe main element for white background sections
    const mainElement = document.querySelector('main');
    if (mainElement) {
      observer.observe(mainElement);
    }

    this.observerInstance = observer;
  }

  private isColorDark(color: string): boolean {
    // Check if color string indicates a dark background
    if (!color || color === 'rgba(0, 0, 0, 0)') return false;

    // Parse RGB values
    const match = color.match(/\d+/g);
    if (!match || match.length < 3) return false;

    const [r, g, b] = match.map(Number);
    // If average brightness is less than 128, it's dark
    const brightness = (r + g + b) / 3;
    return brightness < 128;
  }

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
