import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <article class="floating-card p-6 sm:p-8">
      <div class="reveal-item" appReveal>
        <p class="caps-small">Music</p>
        <h3 class="section-title mt-2">A cinematic vinyl mood built around <i>Khatr</i> and <i>Stoner</i>.</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div class="lg:col-span-2 reveal-item" appReveal [revealDelay]="120">
          <div class="music-vinyl-card p-4 sm:p-5 rounded-2xl border border-white/15">
            <div class="relative w-full pb-[56.25%] rounded-xl overflow-hidden border border-white/10">
              <iframe
                class="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/z8IIGT0eH1s"
                title="Hamritox music video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>

        <div class="reveal-item" appReveal [revealDelay]="220">
          <div class="spotify-card rounded-2xl border border-emerald-300/25 p-4">
            <p class="caps-small text-emerald-300">Spotify Highlights</p>
            <div class="mt-4 space-y-3">
              <div class="track-item">
                <p class="font-semibold">Khatr</p>
                <p class="text-sm text-slate-400">Melodic pressure with cinematic drops.</p>
              </div>
              <div class="track-item">
                <p class="font-semibold">Stoner</p>
                <p class="text-sm text-slate-400">Dark texture and late-night cadence.</p>
              </div>
            </div>
            <a href="https://open.spotify.com/search/Hamritox" target="_blank" rel="noopener" class="editorial-pill mt-5 inline-flex">Open Spotify</a>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: []
})
export class MusicComponent {}
