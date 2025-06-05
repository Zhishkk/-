// script.js

// Эффект глитча на тексте с классом .glitch
const glitchText = document.querySelector('.glitch');

function glitchEffect() {
  if (!glitchText) return;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>/?';
  let glitchContent = '';

  for (let i = 0; i < glitchText.textContent.length; i++) {
    if (Math.random() < 0.2) {
      glitchContent += chars.charAt(Math.floor(Math.random() * chars.length));
    } else {
      glitchContent += glitchText.textContent.charAt(i);
    }
  }

  glitchText.textContent = glitchContent;
}

setInterval(glitchEffect, 200);

// Эффект шума (освещение) на элементе с классом .noise
const noise = document.querySelector('.noise');

function generateNoise() {
  if (!noise) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const opacity = Math.random() * 0.1;
    ctx.fillStyle = `rgba(255,255,255,${opacity})`;
    ctx.fillRect(x, y, 1, 1);
  }

  noise.style.backgroundImage = `url(${canvas.toDataURL()})`;
}

generateNoise();
setInterval(generateNoise, 100);
