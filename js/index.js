window.onload = function() {
  document.getElementById('welcome-popup').style.display = 'flex';
};

function closePopup() {
  document.getElementById('welcome-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const topnav = document.querySelector('.topnav');
  if (burger && topnav) {
    burger.addEventListener('click', () => {
      const isOpen = topnav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  try {
    const here = location.pathname.replace(/\\/g, '/').toLowerCase();
    document.querySelectorAll('.topnav ul a').forEach(a => {
      const href = a.getAttribute("href");
      if (!href) return;
      const link = new URL(href, location.origin + location.pathname).pathname.toLowerCase();
      if (here.endsWith(link)) a.classList.add('active');
    });
  } catch (e) { }
  const revealEls = document.querySelectorAll('.card, .text-box, .figure img, .contact-card, .section');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('reveal-in'));
  }
});
