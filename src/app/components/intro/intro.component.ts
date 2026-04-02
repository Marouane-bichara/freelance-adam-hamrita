import { Component, OnInit, OnDestroy, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('introAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({ opacity: 0, transform: 'translateY(-20px) scale(0.95)' }))
      ])
    ]),
    trigger('wordAnimation', [
      transition(':enter', [
        style({ opacity: 0, letterSpacing: '0.2em' }),
        animate('1200ms 500ms ease-out', style({ opacity: 1, letterSpacing: '0.05em' }))
      ])
    ])
  ],
  template: `
    <div 
      *ngIf="showIntro()" 
      class="fixed inset-0 z-[60] flex items-center justify-center bg-[#050816]"
      [@introAnimation]
    >
      <div class="text-center px-4">
        <h1 
          class="intro-word leading-none"
          [@wordAnimation]
        >
          HAMRITOX
        </h1>
        <p class="intro-subtitle mt-5 text-slate-300 uppercase">Content Creator • Gamer • Musician</p>
      </div>
    </div>
  `,
  styles: [`
    .intro-word {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.2rem, 13.5vw, 7rem);
      letter-spacing: clamp(0.03em, 0.8vw, 0.1em);
      color: #f8fafc;
      animation: introExpand 2.8s ease forwards;
      will-change: transform, opacity;
      text-wrap: balance;
    }

    .intro-subtitle {
      font-size: clamp(0.65rem, 2.7vw, 0.9rem);
      letter-spacing: clamp(0.16em, 0.75vw, 0.3em);
      text-wrap: balance;
      padding-inline: 0.25rem;
    }

    @media (max-width: 420px) {
      .intro-subtitle {
        letter-spacing: 0.12em;
      }
    }

    @keyframes introExpand {
      0% { transform: scale(0.9); opacity: 0; letter-spacing: 0.02em; }
      32% { transform: scale(1); opacity: 1; }
      82% { transform: scale(1.04); opacity: 1; }
      100% { transform: scale(1.1); opacity: 0; letter-spacing: 0.2em; }
    }
  `]
})
export class IntroComponent implements OnInit, OnDestroy {
  showIntro = signal(true);
  @Output() introComplete = new EventEmitter<void>();
  private hideTimer?: ReturnType<typeof setTimeout>;
  private completeTimer?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    this.hideTimer = setTimeout(() => {
      this.showIntro.set(false);
      this.completeTimer = setTimeout(() => {
        this.introComplete.emit();
      }, 380);
    }, 2900);
  }

  ngOnDestroy() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }
    if (this.completeTimer) {
      clearTimeout(this.completeTimer);
    }
  }
}
