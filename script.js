// Gallery-only JavaScript: discover thumbnails and provide a lightbox
(function(){
  // Online-only guard — hostURL set to the user's domain (GitHub Pages default)
  const hostURL = 'https://dalcruz.github.io';
  const isLocalOpen = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (isLocalOpen) {
    // reveal the overlay and populate link
    document.addEventListener('DOMContentLoaded', () => {
      const overlay = document.getElementById('onlineOnlyOverlay');
      const hostLink = document.getElementById('hostUrl');
      if (overlay) { overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); }
      if (hostLink) { hostLink.href = hostURL; hostLink.textContent = hostURL; }
    });
    // stop further script so gallery won't run locally
    return;
  }
  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  const thumbs = qsa('.gallery-grid .thumb');
  const lightbox = qs('#lightbox');
  const lightboxImg = qs('#lightboxImg');
  const lbCaption = qs('#lbCaption');
  const lbClose = qs('.lb-close');
  const lbPrev = qs('.lb-prev');
  const lbNext = qs('.lb-next');

  if (!lightbox || !lightboxImg) return;

  let current = -1;

  function show(idx){
    idx = (idx + thumbs.length) % thumbs.length;
    current = idx;
    const imgEl = thumbs[idx].querySelector('img');
    if (!imgEl) return;
    lightboxImg.src = imgEl.getAttribute('src') || '';
    lightboxImg.alt = imgEl.getAttribute('alt') || '';
    lbCaption.textContent = imgEl.getAttribute('alt') || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('open');
    // visually mark focus
    thumbs[idx].classList.add('thumb-pop');
    setTimeout(()=> thumbs[idx].classList.remove('thumb-pop'), 350);
  }

  function close(){
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }

  function prev(){ show(current - 1); }
  function next(){ show(current + 1); }

  // wire thumbnails
  thumbs.forEach((thumb, i) => {
    thumb.setAttribute('tabindex', '0');
    thumb.addEventListener('click', () => show(i));
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); }
    });
  });

  // controls
  lbClose && lbClose.addEventListener('click', close);
  lbPrev && lbPrev.addEventListener('click', prev);
  lbNext && lbNext.addEventListener('click', next);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
