import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <article class="floating-card p-6 sm:p-7 h-full">
      <div class="reveal-item" appReveal>
        <div class="flex items-center justify-between gap-3">
          <p class="caps-small">Gaming</p>
          <span class="live-pill"><span class="live-dot"></span>Live</span>
        </div>
        <h3 class="section-title mt-3">Competitive pressure, <i>sharp decisions</i>, and audience momentum.</h3>
      </div>

      <div class="rounded-2xl overflow-hidden border border-white/15 mt-5 reveal-item" appReveal [revealDelay]="120">
        <img src="/pictureHimPlaying.jpeg" alt="Hamritox playing live" class="w-full h-52 object-cover" />
      </div>

      <p class="mt-4 text-slate-300 reveal-item" appReveal [revealDelay]="220">
        Every stream is built around tension, pacing, and interaction. Hamritox balances high-energy gameplay with commentary that keeps viewers inside the decision-making process.
      </p>

      <div class="mt-5 flex flex-wrap gap-3 reveal-item" appReveal [revealDelay]="320">
        <a href="https://www.youtube.com/channel/UCb3XGSzUQ8xfZjbba3vT71w" target="_blank" rel="noopener" class="editorial-pill inline-flex">
          Open Gaming Channel
        </a>
        <a href="https://kick.com/hamritoxic/about" target="_blank" rel="noopener" class="editorial-pill inline-flex">
          Kick
        </a>
        <a href="https://m.twitch.tv/hamritox_/about" target="_blank" rel="noopener" class="editorial-pill inline-flex">
          Twitch
        </a>
      </div>
    </article>
  `,
  styles: []
})
export class GamingComponent {}
