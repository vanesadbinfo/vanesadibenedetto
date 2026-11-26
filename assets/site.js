(function () {
  var b = document.body;
  if (/[?&]editar/.test(location.search)) { b.classList.add("edit"); }
  var nav = document.querySelector(".nav"), burger = document.querySelector(".burger");
  if (nav && burger) {
    burger.addEventListener("click", function () {
      var o = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", o ? "true" : "false");
      burger.textContent = o ? "Cerrar" : "Menú";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.textContent = "Menú"; burger.focus(); }
    });
  }
  document.querySelectorAll("#maletas button").forEach(function (x) {
    x.addEventListener("click", function () { x.setAttribute("aria-pressed", x.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
  });
  var fab = document.querySelector(".fab");
  if (fab) { var f = function () { fab.classList.toggle("show", window.scrollY > 700); }; f(); window.addEventListener("scroll", f, { passive: true }); }
  var rv = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) { rv.forEach(function (e) { e.classList.add("in"); }); }
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.15 });
    rv.forEach(function (e) { io.observe(e); });
  }
  var form = document.getElementById("contactForm");
  if (form) {
    var note = document.getElementById("formNote");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]"); btn.disabled = true; note.className = "note"; note.textContent = "Enviando…";
      fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (j.success) { note.className = "note ok"; note.textContent = "Mensaje enviado. Te respondo en cuanto pueda."; form.reset(); } else { throw new Error(); } })
        .catch(function () { note.className = "note err"; note.textContent = "No se pudo enviar. Escríbeme por WhatsApp o a Escribenos@vanesadibenedetto.com."; })
        .then(function () { btn.disabled = false; });
    });
  }
})();
