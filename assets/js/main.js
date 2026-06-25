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
  const cookieBar = document.getElementById('cookieBar');
  const COOKIE_KEY = 'vdb_cookie_consent';
  if (cookieBar) {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(function () { cookieBar.classList.add('show'); }, 700);
    }
    var acceptBtn = document.getElementById('cookieAccept');
    var rejectBtn = document.getElementById('cookieReject');
    if (acceptBtn) acceptBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      cookieBar.classList.remove('show');
    });
    if (rejectBtn) rejectBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'rejected');
      cookieBar.classList.remove('show');
    });
  }

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
