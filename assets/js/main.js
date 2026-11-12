// ════════════════════════════════════════════════════════════════
// VANESA DI BENEDETTO — Script compartido
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // Nav: cambia de fondo al hacer scroll
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Menú móvil
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cierra el menú al pulsar un enlace
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Banner de cookies ──────────────────────────────────────────
  // La preferencia se guarda en localStorage. Si el navegador bloquea el
  // almacenamiento (modo privado estricto), el banner se muestra igualmente.
  const cookieBar = document.getElementById('cookieBar');
  const COOKIE_KEY = 'vdb_cookie_consent';
  function getConsent() { try { return localStorage.getItem(COOKIE_KEY); } catch (e) { return null; } }
  function setConsent(v) { try { localStorage.setItem(COOKIE_KEY, v); } catch (e) { /* sin almacenamiento */ } }
  function clearConsent() { try { localStorage.removeItem(COOKIE_KEY); } catch (e) { /* sin almacenamiento */ } }
  function showCookieBar() { if (cookieBar) cookieBar.classList.add('show'); }
  function hideCookieBar() { if (cookieBar) cookieBar.classList.remove('show'); }

  if (cookieBar) {
    if (!getConsent()) setTimeout(showCookieBar, 700);
    var acceptBtn = document.getElementById('cookieAccept');
    var rejectBtn = document.getElementById('cookieReject');
    if (acceptBtn) acceptBtn.addEventListener('click', function () { setConsent('accepted'); hideCookieBar(); });
    if (rejectBtn) rejectBtn.addEventListener('click', function () { setConsent('rejected'); hideCookieBar(); });
  }
  // Enlace "Configurar cookies" del pie: permite cambiar la decisión en cualquier momento
  document.querySelectorAll('[data-cookie-settings]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      clearConsent();
      showCookieBar();
    });
  });

  // ── Formulario de contacto (Web3Forms) ─────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = document.getElementById('formNote');
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalLabel = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;
      note.textContent = '';
      note.className = 'form-note';

      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData);

      fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (response) {
        return response.json().then(function (data) {
          if (response.ok) {
            note.textContent = 'Mensaje enviado. Te responderé lo antes posible.';
            note.className = 'form-note success';
            contactForm.reset();
          } else {
            throw new Error(data.message || 'Form error');
          }
        });
      }).catch(function () {
        note.textContent = 'No se pudo enviar. Escríbeme directamente por WhatsApp o email mientras lo revisamos.';
        note.className = 'form-note error';
      }).finally(function () {
        btn.textContent = originalLabel;
        btn.disabled = false;
      });
    });
  }

});

// ── Landing Retiro Toscana ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('villaLightbox');
  if (lightbox) {
    var lightboxImage = lightbox.querySelector('img');
    var closeButton = lightbox.querySelector('button');
    document.querySelectorAll('[data-lightbox]').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImage.src = item.getAttribute('data-lightbox');
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.src = '';
      document.body.style.overflow = '';
    }
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
  }
});
