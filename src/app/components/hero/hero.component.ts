import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <section id="hero" class="relative pt-36 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-7xl mx-auto floating-card p-6 sm:p-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="reveal-item" appReveal [revealDelay]="120">
            <p class="caps-small mb-4">Adam Hamrita • Hamritox</p>
            <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl leading-[1.06]">
              Building <i>digital empires</i> through sound and <i>strategy</i>.
            </h1>
            <p class="mt-6 text-base sm:text-lg text-slate-300/90">
              From Morocco to a global audience, Hamritox blends gaming, music, and storytelling into a single evolving universe.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://www.youtube.com/@Hamritox" target="_blank" rel="noopener" class="editorial-pill">YouTube</a>
              <a href="https://www.instagram.com/hamritox/" target="_blank" rel="noopener" class="editorial-pill">Instagram</a>
              <a href="#contact" class="editorial-pill">Management</a>
            </div>
          </div>

          <div class="relative reveal-item" appReveal [revealDelay]="280">
            <div class="hero-mask">
              <img src="/mainpicture.jpeg" alt="Adam Hamrita" class="w-full h-full object-cover" />
            </div>
            <div class="hero-orb"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-title { font-family: 'Playfair Display', serif; }

    .hero-mask {
      overflow: hidden;
      aspect-ratio: 4 / 5;
      border-radius: 84% 16% 74% 26% / 20% 84% 16% 80%;
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: 0 22px 48px rgba(15, 23, 42, 0.45);
      will-change: transform;
    }

    .hero-orb {
      position: absolute;
      width: 180px;
      height: 180px;
      right: -24px;
      bottom: -22px;
      border-radius: 9999px;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.55), rgba(59, 130, 246, 0.06));
      filter: blur(16px);
      pointer-events: none;
    }
  `]
})
export class HeroComponent {}
