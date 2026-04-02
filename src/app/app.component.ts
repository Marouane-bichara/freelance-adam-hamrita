import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { MusicComponent } from './components/music/music.component';
import { LatestContentComponent } from './components/latest-content/latest-content.component';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ParticleBackgroundComponent,
    HeaderComponent,
    IntroComponent,
    HeroComponent,
    AboutComponent,
    GamingComponent,
    MusicComponent,
    LatestContentComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Adam-Hamrita';
  showIntro = true;

  constructor(public themeService: ThemeService) {}

  onIntroComplete() {
    this.showIntro = false;
  }
}
