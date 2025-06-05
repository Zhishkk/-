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

  const glitchTexts = [
    "[ОПАСНОСТЬ]",
    "[ОБЕРНИТЕСЬ]",
    "[ВЫ ПОД НАБЛЮДЕНИЕМ]",
    "[ЖИШКА СМОТРИТ]",
    "[ПРОНИКНОВЕНИЕ]",
    "[НЕТ СИГНАЛА]",
    "[*****]"
  ];

  let glitchReady = false; // Флаг, что 10 секунд прошло
  let glitchInterval = null; // для setInterval глюков

  // Сначала устанавливаем текст в стабильный
  subtitle.textContent = "[ЗАСЕКРЕЧЕНО]";

  // Через 10 секунд разрешаем глючить
  setTimeout(() => {
    glitchReady = true;
  }, 10000);

  // Навели курсор
  subtitle.addEventListener("mouseenter", () => {
    if (!glitchReady) return; // Если 10 сек не прошло — игнорируем

    // Запускаем глюк (каждые 100мс меняем текст на случайный)
    glitchInterval = setInterval(() => {
      const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
      subtitle.textContent = randomText;
    }, 100);

    // Можно добавить класс для анимации, если хочешь
    subtitle.classList.add("glitch");
  });

  // Убрали курсор
  subtitle.addEventListener("mouseleave", () => {
    if (!glitchReady) return;

    // Останавливаем глюк и возвращаем стабильный текст
    clearInterval(glitchInterval);
    glitchInterval = null;
    subtitle.textContent = "[ЗАСЕКРЕЧЕНО]";
    subtitle.classList.remove("glitch");
  });
});

