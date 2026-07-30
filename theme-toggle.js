document.addEventListener('DOMContentLoaded', () => {
  const themeLink = document.getElementById('theme');
  const themeBtn = document.getElementById('theme-btn');
  const themeBtnText = document.getElementById('theme-btn-text');

  if (!themeLink || !themeBtn || !themeBtnText) return;

  const blackTheme =
    'https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/black.css';
  const whiteTheme =
    'https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/white.css';

  themeBtn.addEventListener('click', () => {
    // Check if current theme is black
    const isBlack = themeLink.getAttribute('href') === blackTheme;

    // 1. Swap stylesheet href
    themeLink.setAttribute('href', isBlack ? whiteTheme : blackTheme);

    // 2. Update ADA / ARIA attributes for screen readers
    themeBtn.setAttribute('aria-pressed', isBlack ? 'true' : 'false');
    themeBtn.setAttribute(
      'aria-label',
      isBlack ? 'Switch to dark theme' : 'Switch to light theme',
    );

    // 3. Update visible button text
    themeBtnText.textContent = isBlack
      ? 'Switch to Black Theme'
      : 'Switch to White Theme';
  });
});
