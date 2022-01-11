import { WindowDimensions } from '../../types/WindowDimensions';

export default function ParticleAnimation(canvasContext: CanvasRenderingContext2D | null | undefined, windowDimensions: WindowDimensions) {

  const canvas = document.getElementById("BackgroundCanvas") as HTMLCanvasElement;
  const ctx = canvasContext!;

  // canvas.width = windowDimensions.width;
  // canvas.height = windowDimensions.height;

  class Particle {
    x: number;
    y: number;
    amplitude: number;
    dx: number;
    size: number;
    oscillation: number;
    dOscillation: number;


    constructor(x: number, y: number, amplitude: number, dx: number, size: number, oscillation: number, dOscillation: number) {
      this.x = x;
      this.y = y;
      this.amplitude = amplitude;
      this.dx = dx;
      this.size = size;
      this.oscillation = oscillation;
      this.dOscillation = dOscillation;
    }
  }

  let particles: Particle[] = [];
  const numParticles = 300;
  const maxAmplitude = 1;
  const minDx = -1;
  const maxSize = 30;
  const maxOscillation = 2 * Math.PI;
  const maxDOscillation = 0.03;
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(canvas.width + Math.random() * canvas.width, Math.random() * canvas.height,
      Math.random() * maxAmplitude, Math.random() * minDx, Math.random() * maxSize,
      Math.random() * maxOscillation, Math.random() * maxDOscillation));
  }

  const image = document.getElementById("Particle") as HTMLImageElement;

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      ctx.globalAlpha = (Math.sin(particles[i].oscillation) + 1) * 0.375;
      ctx.drawImage(image, particles[i].x, particles[i].y, particles[i].size, particles[i].size);

      let oldX = particles[i].x;
      particles[i].x += particles[i].dx;
      particles[i].y += particles[i].amplitude * Math.cos(oldX / 100);
      particles[i].oscillation += particles[i].dOscillation;

      if (particles[i].x < -particles[i].size) {
        particles[i].x = canvas.width;
      }
    }
  }

  draw();
}