(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  // Solid header once the page scrolls.
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu.
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // EN/ES switch: remember the choice and stay on the same section.
  document.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (err) {}
      if (location.hash) {
        e.preventDefault();
        location.href = a.getAttribute('href') + location.hash;
      }
    });
  });

  // Current year in the footer.
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // Fade sections in as they enter the viewport.
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    revealer.observe(el);
  });

  // Highlight the nav link for the section in view.
  var links = {};
  menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.keys(links).forEach(function (id) { links[id].classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(links).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) spy.observe(section);
  });
})();
