// Idioma (ES/EN), catálogo y comparador antes/después.
(function () {
  const root = document.documentElement;
  const KEY = "pancracio.lang";

  function pickLang() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* sin almacenamiento */ }
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  function setLang(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.set === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* nada */ }
  }

  document.addEventListener("click", (ev) => {
    const b = ev.target.closest(".lang button");
    if (b) setLang(b.dataset.set);
  });
  setLang(pickLang());

  // Comparador antes / después
  document.querySelectorAll(".compare").forEach((box) => {
    const range = box.querySelector("input[type=range]");
    const after = box.querySelector(".after");
    const bar = box.querySelector(".bar");
    const update = () => {
      after.style.clipPath = `inset(0 0 0 ${range.value}%)`;
      bar.style.left = `${range.value}%`;
    };
    range.addEventListener("input", update);
    update();
  });

  // Catálogo
  const grid = document.getElementById("catalog");
  if (!grid) return;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const both = (obj) => `<span lang="es">${esc(obj.es)}</span><span lang="en">${esc(obj.en)}</span>`;

  fetch("catalog.json", { cache: "no-cache" })
    .then((r) => r.json())
    .then((data) => {
      grid.innerHTML = data.programs.map((p) => `
        <article class="card" style="--accent:${esc(p.color)}">
          <a class="shot" href="${esc(p.page)}"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"></a>
          <div class="body">
            <div class="head">
              <img src="${esc(p.icon)}" alt="" width="52" height="52">
              <div>
                <h2><a href="${esc(p.page)}" style="color:inherit;text-decoration:none">${esc(p.name)}</a></h2>
                <div class="meta">${p.store === "play" ? "" : "v" + esc(p.version) + " · "}${esc(p.platform)}</div>
              </div>
            </div>
            <p>${both(p.tagline)}</p>
            <div class="tags">${p.tags.es.map((t, i) => `<span class="tag"><span lang="es">${esc(t)}</span><span lang="en">${esc(p.tags.en[i] || t)}</span></span>`).join("")}</div>
            <div class="actions">
              ${p.store === "play"
                ? `<a class="btn primary" href="${esc(p.download)}" target="_blank" rel="noopener">▶ <span lang="es">Google Play</span><span lang="en">Google Play</span></a>`
                : `<a class="btn primary" href="${esc(p.download)}">⬇ <span lang="es">Descargar</span><span lang="en">Download</span> <small>${esc(p.size)}</small></a>`}
              <a class="btn" href="${esc(p.page)}"><span lang="es">Ver más</span><span lang="en">Details</span></a>
            </div>
          </div>
        </article>`).join("") + `
        <article class="card soon"><div class="body" style="justify-content:center">
          <div class="big">🐈‍⬛</div>
          <b><span lang="es">Más proyectos en camino</span><span lang="en">More projects on the way</span></b>
          <span><span lang="es">Vuelve pronto.</span><span lang="en">Check back soon.</span></span>
        </div></article>`;
      const count = document.getElementById("count");
      if (count) count.textContent = data.programs.length;
    })
    .catch(() => {
      grid.innerHTML = '<p class="note"><span lang="es">No se pudo cargar el catálogo. Revisa la carpeta <a href="programs/">programs</a>.</span><span lang="en">Could not load the catalog. See the <a href="programs/">programs</a> folder.</span></p>';
    });
})();
