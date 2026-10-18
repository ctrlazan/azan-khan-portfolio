/* Azan Khan — Portfolio interactions. Progressive enhancement: the site is fully usable without this file. */
(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  /* ---------- Header state ---------- */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const setMenu = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 881px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Active nav link ---------- */
  const links = [...document.querySelectorAll('[data-nav]')];
  const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && targets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        const active = links.find((a) => a.getAttribute('href') === '#' + entry.target.id);
        if (active) active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach((t) => spy.observe(t));
  }

  /* ---------- Card spotlight ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });

    /* ---------- Subtle cursor glow ---------- */
    const glow = document.querySelector('.cursor-glow');
    if (glow) {
      let x = 0, y = 0, tx = 0, ty = 0, raf = null;
      const tick = () => {
        x += (tx - x) * 0.14; y += (ty - y) * 0.14;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        raf = (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) ? requestAnimationFrame(tick) : null;
      };
      window.addEventListener('pointermove', (e) => {
        tx = e.clientX; ty = e.clientY; glow.classList.add('is-on');
        if (!raf) raf = requestAnimationFrame(tick);
      }, { passive: true });
      document.addEventListener('pointerleave', () => glow.classList.remove('is-on'));
    }
  }

  /* ---------- Copy email ---------- */
  const copyBtn = document.getElementById('copy-email');
  const status = document.getElementById('copy-status');
  if (copyBtn) {
    const label = copyBtn.querySelector('[data-copy-label]');
    const original = label.textContent;
    const done = (ok) => {
      label.textContent = ok ? 'Copied' : 'Press Ctrl+C to copy';
      if (status) status.textContent = ok ? 'Email address copied to clipboard.' : 'Copy failed. The address is shown above.';
      setTimeout(() => { label.textContent = original; if (status) status.textContent = ''; }, 2200);
    };
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.dataset.email;
      try {
        if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(email); return done(true); }
        const ta = document.createElement('textarea');
        ta.value = email; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand('copy'); document.body.removeChild(ta);
        done(ok);
      } catch (_) { done(false); }
    });
  }
})();
