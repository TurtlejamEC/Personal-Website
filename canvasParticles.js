function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

var Particle = function Particle(x, y, amplitude, dx, size, oscillation, dOscillation) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.amplitude = amplitude;
    this.dx = dx;
    this.size = size;
    this.oscillation = oscillation;
    this.dOscillation = dOscillation;
};

var particles = [];
var numParticles = 300;
var maxAmplitude = 1;
var minDx = -1;
var maxSize = 30;
var maxOscillation = 2 * Math.PI;
var maxDOscillation = 0.03;
for (var i = 0; i < numParticles; i++) {
    particles.push(new Particle(canvas.width + Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * maxAmplitude, Math.random() * minDx, Math.random() * maxSize, Math.random() * maxOscillation, Math.random() * maxDOscillation));
}

var image = document.getElementById("particle");

function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var _i = 0; _i < particles.length; _i++) {
        ctx.globalAlpha = (Math.sin(particles[_i].oscillation) + 1) * 0.375;
        ctx.drawImage(image, particles[_i].x, particles[_i].y, particles[_i].size, particles[_i].size);

        var oldX = particles[_i].x;
        particles[_i].x += particles[_i].dx;
        particles[_i].y += particles[_i].amplitude * Math.cos(oldX / 100);
        particles[_i].oscillation += particles[_i].dOscillation;

        if (particles[_i].x < -particles[_i].size) {
            particles[_i].x = canvas.width;
        }
    }
}

draw();