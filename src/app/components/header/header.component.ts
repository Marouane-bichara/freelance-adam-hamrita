import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { LucideAngularModule, House, UserRound, Gamepad2, Music2, Radio, Mail, Menu, X, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  animations: [
    trigger('menuCard', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px) scale(0.96)' }),
        animate('220ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ opacity: 0, transform: 'translateY(-8px) scale(0.97)' }))
      ])
    ])
  ],
  template: `
    <header class="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div class="island-nav w-full max-w-5xl rounded-full border border-white/15 px-3 sm:px-4 py-2.5 backdrop-blur-md">
        <div class="flex items-center justify-between gap-3">
          <a href="#hero" class="brand-wordmark px-2">HAMRITOX</a>

          <nav class="hidden md:flex items-center gap-2">
            <a *ngFor="let item of menuItems" [href]="item.href" class="island-link">
              <lucide-icon [img]="item.icon" class="h-4 w-4"></lucide-icon>
              <span>{{ item.label }}</span>
            </a>
          </nav>

          <div class="flex items-center gap-2">
            <button class="theme-pill" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
              <span class="theme-track">
                <span class="theme-knob" [class.translate]="themeService.isDarkMode()">
                  <lucide-icon *ngIf="!themeService.isDarkMode()" [img]="Sun" class="h-3.5 w-3.5"></lucide-icon>
                  <lucide-icon *ngIf="themeService.isDarkMode()" [img]="Moon" class="h-3.5 w-3.5"></lucide-icon>
                </span>
              </span>
            </button>

            <button class="md:hidden menu-btn" (click)="mobileOpen = !mobileOpen" aria-label="Toggle menu">
              <lucide-icon *ngIf="!mobileOpen" [img]="Menu" class="h-5 w-5"></lucide-icon>
              <lucide-icon *ngIf="mobileOpen" [img]="X" class="h-5 w-5"></lucide-icon>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div *ngIf="mobileOpen" class="fixed inset-0 z-40 md:hidden pointer-events-none flex items-start justify-center pt-24 px-4">
      <div class="mobile-menu-card pointer-events-auto" [@menuCard]>
        <a *ngFor="let item of menuItems" [href]="item.href" class="mobile-link" (click)="mobileOpen = false">
          <lucide-icon [img]="item.icon" class="h-4 w-4"></lucide-icon>
          <span>{{ item.label }}</span>
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent {
  mobileOpen = false;

  readonly House = House;
  readonly UserRound = UserRound;
  readonly Gamepad2 = Gamepad2;
  readonly Music2 = Music2;
  readonly Radio = Radio;
  readonly Mail = Mail;
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;

  readonly menuItems = [
    { label: 'Home', href: '#hero', icon: House },
    { label: 'About', href: '#about', icon: UserRound },
    { label: 'Gaming', href: '#gaming', icon: Gamepad2 },
    { label: 'Music', href: '#music', icon: Music2 },
    { label: 'Content', href: '#content', icon: Radio },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  constructor(public themeService: ThemeService) {}
}
