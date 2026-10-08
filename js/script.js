// ==========================================================
// TIMOTHY O DESIGN — Site Scripts
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile menu toggle ---- */
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal for sections ---- */
  var revealTargets = document.querySelectorAll(
    '.about-inner, .services-list, .portfolio-grid, .approach-steps, .why-inner, .testimonials-grid, .skills-grid, .faq-list, .social-grid, .contact-inner'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Portfolio: View Project toggle ---- */
  document.querySelectorAll('.project-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
      var label = btn.querySelector('span');
      if (label) { label.textContent = isOpen ? 'View Project' : 'Hide Details'; }
    });
  });

  /* ---- Cookie consent banner ---- */
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');
  var cookieReject = document.getElementById('cookie-reject');
  var CONSENT_KEY = 'tod_cookie_consent';

  if (cookieBanner) {
    var storedConsent = null;
    try { storedConsent = window.localStorage.getItem(CONSENT_KEY); } catch (e) { storedConsent = null; }

    if (!storedConsent) {
      cookieBanner.hidden = false;
    }

    function setConsent(value) {
      try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignore if storage unavailable */ }
      cookieBanner.hidden = true;
    }

    if (cookieAccept) { cookieAccept.addEventListener('click', function () { setConsent('accepted'); }); }
    if (cookieReject) { cookieReject.addEventListener('click', function () { setConsent('rejected'); }); }
  }

  /* ---- Case-study gallery lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-trigger, .case-single-trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    if (lightboxClose) { lightboxClose.addEventListener('click', closeLightbox); }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) { closeLightbox(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) { closeLightbox(); }
    });
  }

});
