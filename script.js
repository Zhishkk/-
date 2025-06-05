document.addEventListener("DOMContentLoaded", () => {
  // 🔴 СТАРЫЙ КОД: вся твоя анимация, glitch, смена надписей и т.п.
  // например:
  const subtitle = document.querySelector('.subtitle');
  const glitchClass = 'glitch-started';
  let glitchStarted = false;

  setTimeout(() => {
    subtitle.classList.add(glitchClass);
    glitchStarted = true;
  }, 10000);

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

  // 🔴 НОВЫЙ КОД: фотки и модалка
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
