import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="footer-card max-w-7xl mx-auto text-center px-6 py-5">
        <p class="font-semibold footer-brand">HAMRITOX</p>
        <p class="text-sm mt-1 footer-sub">Creator • Gamer • Musician</p>
        <p class="text-xs mt-2 footer-copy">Software Engineer: Marouane Bichara</p>
        <p class="text-xs mt-4 footer-copy">&copy; {{ currentYear }} Adam Hamrita. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
