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

  noise.style.backgroundImage = url(${canvas.toDataURL()});
}

generateNoise();
setInterval(generateNoise, 100);









document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector('.glitch');
  const subtitle = document.querySelector('.subtitle');
  const glitchClass = 'glitch-started';
  let glitchStarted = false;

  const word = 'ЖИШКА';
  const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789@#$%&*';

  function getRandomChar() {
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  function glitchEffect(durationMs, intervalMs) {
    return new Promise(resolve => {
      const iterations = durationMs / intervalMs;
      let count = 0;
      const interval = setInterval(() => {
        let text = '';
        for (let i = 0; i < word.length; i++) {
          text += getRandomChar();
        }
        title.textContent = text;
        count++;
        if (count >= iterations) {
          clearInterval(interval);
          resolve();
        }
      }, intervalMs);
    });
  }

  function showWord(durationMs) {
    return new Promise(resolve => {
      title.textContent = word;
      setTimeout(resolve, durationMs);
    });
  }

  async function loopGlitch() {
    while (true) {
      await glitchEffect(5000, 100); // 5 сек глюк
      await showWord(3000);          // 3 сек "ЖИШКА"
    }
  }

  // 🔴 Запускаем всё это через 10 сек
  setTimeout(() => {
    subtitle.classList.add(glitchClass);
    glitchStarted = true;
    loopGlitch(); // 🧠 Глючим заголовок
  }, 10000);

  // 🔁 Подзаголовок — [ЗАСЕКРЕЧЕНО] и его фишки
  subtitle.addEventListener("mouseenter", () => {
    if (glitchStarted) {
      subtitle.textContent = getRandomSubtitle();
    }
  });

  subtitle.addEventListener("mouseleave", () => {
    if (glitchStarted) {
      subtitle.textContent = "[ЗАСЕКРЕЧЕНО]";
    }
  });

  function getRandomSubtitle() {
    const subtitles = [
      "[НЕ СМОТРИ НА НЕГО]",
      "[КТО ЭТО ТАМ?]",
      "[ВРЕМЯ ПОШЛО]",
      "[ОН УЖЕ ЗДЕСЬ]",
      "[ОБРАТНОГО ПУТИ НЕТ]",
    ];
    return subtitles[Math.floor(Math.random() * subtitles.length)];
  }

  // 🔲 Модалка с фотками
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalImage = document.getElementById("modalImage");
  const photos = document.querySelectorAll(".photo-card img");

  photos.forEach(photo => {
    photo.addEventListener("click", () => {
      modalImage.src = photo.src;
      modal.classList.add("open");
    });
  });

  modalOverlay.addEventListener("click", () => {
    modal.classList.remove("open");
    modalImage.src = "";
  });
});
