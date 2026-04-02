import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-latest-content',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <article class="floating-card p-6 sm:p-8 h-full">
      <div class="reveal-item" appReveal>
        <p class="caps-small">Latest</p>
        <h3 class="section-title mt-2">Newest release from the <i>main channel</i>.</h3>
      </div>

      <div class="relative w-full pb-[56.25%] mt-5 rounded-2xl overflow-hidden border border-white/15 reveal-item" appReveal [revealDelay]="120">
        <iframe
          class="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/KLtvDyb_p6s"
          title="Latest Hamritox content"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

      <div class="mt-5 flex flex-wrap gap-3 reveal-item" appReveal [revealDelay]="220">
        <a href="https://www.youtube.com/@Hamritox" target="_blank" rel="noopener" class="editorial-pill">Watch on YouTube</a>
        <a href="https://www.instagram.com/hamritox/" target="_blank" rel="noopener" class="editorial-pill">Instagram</a>
      </div>
    </article>
  `,
  styles: []
})
export class LatestContentComponent {}
