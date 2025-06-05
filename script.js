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
