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
    "[ОБЕРНИСЬ]",
    "[ВЫ ПОД НАБЛЮДЕНИЕМ]",
    "[ЖИШКА СМОТРИТ]",
    "[ПРОНИКНОВЕНИЕ]",
    "[НЕТ СИГНАЛА]",
    "[*****]"
  ];

  let glitchReady = false;       // Прошло 10 секунд
  let glitchInterval = null;     // Для смены текста
  let glitchAnimationClass = "glitch-animation"; // CSS класс с анимацией глюка

  // Ставим стартовый текст
  subtitle.textContent = "[ЗАСЕКРЕЧЕНО]";

  // Через 10 секунд включаем анимацию глюка (всегда), разрешаем менять текст по наведению
  setTimeout(() => {
    glitchReady = true;
    subtitle.classList.add(glitchAnimationClass); // Включаем анимацию глюка
  }, 10000);

  // Навели курсор — если 10 секунд прошло, запускаем смену текста
  subtitle.addEventListener("mouseenter", () => {
    if (!glitchReady) return;

    if (glitchInterval) return;

    glitchInterval = setInterval(() => {
      const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
      subtitle.textContent = randomText;
    }, 100);
  });

  // Убрали курсор — останавливаем смену текста, возвращаем стабильный текст
  subtitle.addEventListener("mouseleave", () => {
    if (!glitchReady) return;

    if (glitchInterval) {
      clearInterval(glitchInterval);
      glitchInterval = null;
    }
    subtitle.textContent = "[ЗАСЕКРЕЧЕНО]";
  });
});
.subtitle.glitch-animation {
  animation: glitchEffect 1s infinite;
  color: red; /* или нужный эффект */
}

@keyframes glitchEffect {
  0% {
    text-shadow: 2px 0 red, -2px 0 cyan;
  }
  20% {
    text-shadow: -2px 0 red, 2px 0 cyan;
  }
  40% {
    text-shadow: 2px 2px red, -2px -2px cyan;
  }
  60% {
    text-shadow: -2px -2px red, 2px 2px cyan;
  }
  80% {
    text-shadow: 2px 0 red, -2px 0 cyan;
  }
  100% {
    text-shadow: none;
  }
}






document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalImage = document.getElementById("modalImage");

  // Все фотки в строке
  const photos = document.querySelectorAll(".photo-card img");

  photos.forEach(photo => {
    photo.addEventListener("click", () => {
      // В модалку ставим src нажатой фотки
      modalImage.src = photo.src;

      // Добавляем класс, который сделает подсветку красным и откроет модалку
      modal.classList.add("open");
    });
  });

  // Закрываем модалку по клику на затемнении
  modalOverlay.addEventListener("click", () => {
    modal.classList.remove("open");
    modalImage.src = ""; // очищаем для безопасности
  });
});
