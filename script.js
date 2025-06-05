document.addEventListener("DOMContentLoaded", () => {
  const glitchElement = document.querySelector('.glitch');
  const word = 'ЖИШКА';
  const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789@#$%&*';

  let forceShowWord = false;
  const startTime = Date.now();

  function getRandomChar() {
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  function updateText() {
    const elapsed = Date.now() - startTime;

    if (elapsed < 20000 || forceShowWord) {
      glitchElement.textContent = word;
    } else {
      let text = '';
      for (let i = 0; i < word.length; i++) {
        text += getRandomChar();
      }
      glitchElement.textContent = text;
    }
  }

  setInterval(updateText, 100);

  glitchElement.addEventListener('mouseenter', () => {
    forceShowWord = true;
  });

  glitchElement.addEventListener('mouseleave', () => {
    forceShowWord = false;
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".subtitle");
  const creepyTexts = [
    "ТЫ НЕ ОДИН",
    "ПРЕКРАТИ",
    "ПРОЯВИСЬ",
    "*****",
    "ОБЕРНИСЬ",
    "ОН ЗДЕСЬ",
    "ЖИШКА СМОТРИТ"
  ];

  let originalText = subtitle.textContent;
  let glitchStarted = false;

  // ⏳ Запуск глюков через 10 секунд
  setTimeout(() => {
    glitchStarted = true;
    startSubtitleGlitch();
  }, 10000);

  // 🔁 Фоновый глитч
  function startSubtitleGlitch() {
    setInterval(() => {
      if (Math.random() < 0.3) {
        subtitle.textContent = creepyTexts[Math.floor(Math.random() * creepyTexts.length)];
        setTimeout(() => {
          subtitle.textContent = originalText;
        }, 1000 + Math.random() * 1000);
      }
    }, 3000);
  }

  // 🖱️ Наведение
  subtitle.addEventListener("mouseenter", () => {
    if (!glitchStarted) return;
    subtitle.textContent = creepyTexts[Math.floor(Math.random() * creepyTexts.length)];
  });

  subtitle.addEventListener("mouseleave", () => {
    if (!glitchStarted) return;
    setTimeout(() => {
      subtitle.textContent = originalText;
    }, 800);
  });
});
