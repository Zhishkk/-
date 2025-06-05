document.addEventListener("DOMContentLoaded", () => {
  const glitchElement = document.querySelector('.glitch');
  const word = 'ЖИШКА';
  const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789@#$%&*';

  let forceShowWord = false;
  let startTime = Date.now();

  function getRandomChar() {
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  function updateText() {
    const now = Date.now();
    const elapsed = now - startTime;

    // Если прошло меньше 20 секунд, всегда показываем слово
    if (elapsed < 20000 || forceShowWord) {
      glitchElement.textContent = word;
    } else {
      // Генерируем рандомный набор символов
      let text = '';
      for (let i = 0; i < word.length; i++) {
        text += getRandomChar();
      }
      glitchElement.textContent = text;
    }
  }

  // Обновляем каждые 100 мс
  setInterval(updateText, 100);

  // Поведение при наведении мышки
  glitchElement.addEventListener('mouseenter', () => {
    forceShowWord = true;
  });

  glitchElement.addEventListener('mouseleave', () => {
    forceShowWord = false;
  });
});
