import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  template: `
    <section id="contact" class="py-6">
      <div class="floating-card p-6 sm:p-8 h-full">
        <div class="reveal-item" appReveal>
          <p class="caps-small">Connect</p>
          <h3 class="section-title mt-2">Management and partnerships.</h3>
        </div>

        <div class="mt-5 rounded-2xl border border-white/15 p-4 sm:p-5 reveal-item" appReveal [revealDelay]="100">
          <p class="caps-small">Management Email</p>
          <a href="mailto:manager.hamrita@gmail.com" class="text-lg sm:text-2xl font-semibold break-all mt-2 inline-block">
            manager.hamrita&#64;gmail.com
          </a>
        </div>

        <div class="mt-5 flex flex-col gap-3 reveal-item" appReveal [revealDelay]="200">
          <a href="https://discord.com/invite/p6UWmGs4f3" target="_blank" rel="noopener" class="editorial-pill">Join Discord</a>
          <a href="https://www.youtube.com/@Hamritox" target="_blank" rel="noopener" class="editorial-pill">Main YouTube</a>
          <a href="https://kick.com/hamritoxic/about" target="_blank" rel="noopener" class="editorial-pill">Kick</a>
          <a href="https://m.twitch.tv/hamritox_/about" target="_blank" rel="noopener" class="editorial-pill">Twitch</a>
          <a href="https://www.instagram.com/hamritox/" target="_blank" rel="noopener" class="editorial-pill">Instagram</a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {}
