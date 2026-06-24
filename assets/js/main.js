(function () {
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const backTop = document.querySelector('[data-back-top]');

  function setActiveNav() {
    const offset = window.scrollY + 120;
    let current = sections[0] ? sections[0].id : '';
    sections.forEach((section) => {
      if (section.offsetTop <= offset) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
    if (backTop) backTop.classList.toggle('show', window.scrollY > 520);
  }

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.closest('.prompt-box')?.querySelector('pre');
      if (!target) return;
      const text = target.innerText.trim();
      const done = () => {
        const oldText = button.innerText;
        button.innerText = '已复制';
        setTimeout(() => { button.innerText = oldText; }, 1400);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done).catch(() => {
          button.innerText = '请手动复制';
        });
      } else {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try { document.execCommand('copy'); done(); }
        catch (e) { button.innerText = '请手动复制'; }
        selection.removeAllRanges();
      }
    });
  });

  document.querySelectorAll('[data-faq] button').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('[data-faq]');
      const icon = button.querySelector('i');
      const open = card.classList.toggle('open');
      if (icon) icon.className = open ? 'bi bi-dash-lg' : 'bi bi-plus-lg';
    });
  });


  function openContentImages() {
    const images = Array.from(document.querySelectorAll('main img'));
    images.forEach((img) => {
      if (!img.getAttribute('src')) return;
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('title', '点击在新窗口打开图片');
      const openImage = () => {
        const url = new URL(img.getAttribute('src'), window.location.href).href;
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      img.addEventListener('click', openImage);
      img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openImage();
        }
      });
    });
  }
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  window.addEventListener('resize', setActiveNav);
  openContentImages();
  setActiveNav();
})();