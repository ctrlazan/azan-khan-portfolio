(() => {
  const progress = document.getElementById('progress');
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menuToggle');
  const copyButton = document.getElementById('copyProfile');
  const feedback = document.getElementById('copyFeedback');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  if (copyButton && feedback) {
    copyButton.addEventListener('click', async () => {
      const profileUrl = 'https://github.com/ctrlazan';
      try {
        await navigator.clipboard.writeText(profileUrl);
        feedback.textContent = 'GitHub profile link copied.';
      } catch {
        feedback.textContent = profileUrl;
      }
    });
  }
})();
