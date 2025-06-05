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
