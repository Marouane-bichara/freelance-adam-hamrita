import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #particleCanvas class="fixed inset-0 pointer-events-none z-0"></canvas>
  `,
  styles: [`
    :host ::ng-deep canvas {
      display: block;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
  `]
})
export class ParticleBackgroundComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId?: number;
  private resizeHandler = () => this.resizeCanvas();

  ngOnInit() {
    window.addEventListener('resize', this.resizeHandler, { passive: true });
  }

  ngAfterViewInit() {
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeHandler);
  }

  private initCanvas() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(window.innerWidth * pixelRatio);
    this.canvas.height = Math.floor(window.innerHeight * pixelRatio);
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  private createParticles() {
    const particleCount = Math.min(140, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height,
        Math.random() * 0.18 - 0.09,
        Math.random() * 0.45 + 0.2
      ));
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let particle of this.particles) {
      particle.update();
      particle.draw(this.ctx);

      if (particle.y > this.canvas.height) {
        particle.reset(this.canvas.height);
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  originalY: number;

  constructor(x: number, y: number, vx: number, vy: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = Math.random() * 1.5 + 0.5;
    this.originalY = y;
  }

  update() {
    this.x += this.vx * 0.2;
    this.y += this.vy;
    
    if (this.x > window.innerWidth) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = window.innerWidth;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(186, 230, 253, 0.35)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  reset(canvasHeight: number) {
    this.y = -10;
    this.x = Math.random() * window.innerWidth;
  }
}
