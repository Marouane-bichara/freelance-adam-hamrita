import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <article class="floating-card p-6 sm:p-8 h-full">
      <div class="reveal-item" appReveal>
        <p class="caps-small">Digital Timeline</p>
        <h2 class="section-title mt-2">From bedroom experiments to a <i>regional media force</i>.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
        <div class="timeline-card reveal-item" appReveal [revealDelay]="120">
          <p class="timeline-date">2015</p>
          <p class="timeline-body">At age 14, Adam began producing content in Morocco, learning camera work, editing, and audience rhythm from scratch.</p>
        </div>
        <div class="timeline-card reveal-item" appReveal [revealDelay]="220">
          <p class="timeline-date">2021</p>
          <p class="timeline-body">His consistency and style sharpened into a recognizable identity, combining gaming energy with musical storytelling.</p>
        </div>
        <div class="timeline-card reveal-item" appReveal [revealDelay]="320">
          <p class="timeline-date">Today</p>
          <p class="timeline-body">With roughly <i>740K subscribers</i>, Hamritox continues scaling a cross-platform universe with music, gaming, and creator-led formats.</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-5">
        <div class="rounded-2xl overflow-hidden border border-white/15 reveal-item" appReveal [revealDelay]="360">
          <img src="/picture1.jpeg" alt="Adam creative process" class="w-full h-44 object-cover" />
        </div>
        <div class="rounded-2xl overflow-hidden border border-white/15 reveal-item" appReveal [revealDelay]="420">
          <img src="/picture2.jpeg" alt="Adam content studio" class="w-full h-44 object-cover" />
        </div>
        <div class="rounded-2xl overflow-hidden border border-white/15 col-span-2 reveal-item" appReveal [revealDelay]="480">
          <img src="/picture3.jpeg" alt="Adam creative moments" class="w-full h-72 object-cover object-center" />
        </div>
      </div>
    </article>
  `,
  styles: []
})
export class AboutComponent {}
