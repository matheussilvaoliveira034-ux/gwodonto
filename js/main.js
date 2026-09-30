/* Renderiza o site a partir de js/config.js. Normalizado para a GW Odontologia. */
(() => {
  const C = CONFIG, I = C.images || {};
  const $ = s => document.querySelector(s);   const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const get = p => p.split(".").reduce((o, k) => (o == null ? o : o[k]), C);
  const slot = (key, name, cls = "") => `<div class="slot ${cls}" data-img="${key}" data-name="${esc(name)}"></div>`;

  /* ---------- Tema e metadados ---------- */
  const root = document.documentElement.style;
  root.setProperty("--primary", C.theme.primary);
  root.setProperty("--accent", C.theme.accent);
  root.setProperty("--wpp", C.theme.whatsapp);
  $('meta[name="theme-color"]').content = C.theme.primary;
  document.title = C.brand.title;
  $('meta[name="description"]').content = C.brand.description;    /* ---------- Textos simples (data-t) ---------- */   $$("[data-t]").forEach(e => {
    const v = get(e.dataset.t);
    if (v) e.textContent = v; else e.remove();
  });
  $("#heroTitle").innerHTML = `${esc(C.hero.title)} <span>${esc(C.hero.highlight)}</span>`;

  /* ---------- Seções ocultas ---------- */
  Object.entries(C.sections).forEach(([k, on]) => {
    if (on !== false) return;
    $$(`[data-section="${k}"],[data-nav="${k}"]`).forEach(e => e.remove());
  });

  /* ---------- Logo ---------- */
  const brandMark = () => I.logo
    ? `<img src="${esc(I.logo)}" alt="${esc(C.brand.name)}">`
    : `<span class="wordmark">${esc(C.brand.name)}<small>${esc(C.brand.specialty)}</small></span>`;
  $("#logo").innerHTML = brandMark();
  $("#flogo").innerHTML = brandMark();

  /* ---------- Listas ---------- */
  $("#heroChecks").innerHTML = C.hero.checks.map(t => `<li>${esc(t)}</li>`).join("");
  $("#mq").innerHTML = (t => t + t)(C.marquee.map(t => `<span>${esc(t)}</span>`).join(""));
  $("#aboutText").innerHTML = C.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = C.about.stats.map(s => `<div><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("");
  $("#difList").innerHTML = C.differential.list.map(t => `<li>${esc(t)}</li>`).join("");

  $("#results").innerHTML = C.results.items.map((cap, i) => `
    <article class="card bc"><span class="tag">Caso Clínico</span>
      <div class="pair">${slot("before" + (i + 1), "Antes")}${slot("after" + (i + 1), "Depois")}</div>
      <div class="cap">${esc(cap)}</div></article>`).join("");

  $("#services").innerHTML = C.services.items.map((s, i) => `
    <article class="card tc">${slot("service" + (i + 1), s.title)}
      <div class="b"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
      <a href="#contato" class="more">Saber mais <span aria-hidden="true">→</span></a></div></article>`).join("");

  $("#reviews").innerHTML = C.testimonials.items.map(r => `
    <article class="card rv"><div class="h"><div class="av">${esc(r.name.trim().charAt(0).toUpperCase())}</div>
      <div><b>${esc(r.name)}</b><small>${esc(r.date)}</small></div></div>
      <div class="s" aria-label="5 estrelas">★★★★★</div><p>${esc(r.text)}</p>
      ${C.testimonials.source ? `<em>${esc(C.testimonials.source)}</em>` : ""}</article>`).join("");

  $("#why").innerHTML = C.why.items.map((w, i) => `
    <article class="card wc"><i>${String(i + 1).padStart(2, "0")}</i><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></article>`).join("");

  $("#faqList").innerHTML = C.faq.items.map(f => `
    <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

  /* ---------- Rodapé ---------- */
  const navLinks = $$("#nav a").map(a => `<a href="${a.getAttribute("href")}">${a.textContent}</a>`).join("");
  $("#fnav").innerHTML = navLinks;
  const k = C.contact, wa = k.whatsapp.replace(/\D/g, "");
  const ig = k.instagram ? k.instagram.replace("@", "") : "";
  const rows = [
    wa && `<p>WhatsApp: (11) 97553-2110</p>`,
    k.email && `<p><a href="mailto:${esc(k.email)}">${esc(k.email)}</a></p>`,
    ig && `<p><a href="https://instagram.com/${esc(ig)}" target="_blank" rel="noopener">@${esc(ig)}</a></p>`,
    k.address && `<p>${k.mapsUrl ? `<a href="${esc(k.mapsUrl)}" target="_blank" rel="noopener">${esc(k.address)}</a>` : esc(k.address)}</p>`,
    k.hours && `<p>${esc(k.hours)}</p>`
  ].filter(Boolean);
  $("#fcontact").innerHTML = rows.join("") || `<p>Dados de contato em breve.</p>`;
  $("#copy").textContent = `© ${new Date().getFullYear()} ${C.brand.name}. Todos os direitos reservados.`;

  /* ---------- Imagens ---------- */
  $$("[data-img]").forEach(e => {
    const src = I[e.dataset.img];
    if (src) { e.classList.add("has"); e.innerHTML = `<img src="${esc(src)}" alt="${esc(e.dataset.name)}" loading="lazy">`; }
    else if (C.showPlaceholders) e.innerHTML = `<span>${esc(e.dataset.name)}<small>${e.dataset.img}</small></span>`;
  });

  /* ---------- WhatsApp ---------- */
  const link = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(k.message)}` : "#contato";
  $$(".wpp").forEach(a => { a.href = link; if (wa) { a.target = "_blank"; a.rel = "noopener"; } });

  /* ---------- SEO local (JSON-LD) ---------- */
  if (k.address) {
    const ld = { "@context": "https://schema.org", "@type": "MedicalBusiness", name: C.brand.name,
      description: C.brand.description, address: k.address, telephone: wa ? "+" + wa : undefined,
      sameAs: ig ? ["https://instagram.com/" + ig] : undefined };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  /* ---------- Menu mobile e cabeçalho ---------- */
  const nav = $("#nav"), bg = $("#burger"), hd = $("header");   const closeMenu = () => { nav.classList.remove("open"); bg.classList.remove("x"); bg.setAttribute("aria-expanded", "false"); };   bg.onclick = () => { const o = nav.classList.toggle("open"); bg.classList.toggle("x", o); bg.setAttribute("aria-expanded", o); };   nav.addEventListener("click", e => e.target.closest("a") && closeMenu());   addEventListener("resize", () => innerWidth > 900 && closeMenu());   addEventListener("keydown", e => e.key === "Escape" && closeMenu());   addEventListener("scroll", () => hd.classList.toggle("sc", scrollY > 10), { passive: true });    /* ---------- Animação de entrada ---------- */   const io = new IntersectionObserver(es => es.forEach(e => {     if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }   }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });   $$(".eyebrow,h2,.sub,.hero h1,.lead,.hb,.chk,.hi,.fr,.sg>div,.st,.card,.dif,.cta,.faq details").forEach(e => {
    e.classList.add("fx");
    e.style.transitionDelay = Math.min([...e.parentElement.children].indexOf(e), 5) * 80 + "ms";
    io.observe(e);
  });

  /* ---------- Contadores ---------- */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    co.unobserve(e.target);
    const t = e.target.textContent, n = parseInt(t, 10);
    if (isNaN(n)) return;
    const suf = t.replace(/^\d+/, ""); let st = null;
    const f = ts => { st = st || ts; const p = Math.min((ts - st) / 1200, 1);
      e.target.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }));
  $$(".st b").forEach(b => co.observe(b));    /* ---------- Destaque do menu conforme a rolagem ---------- */   const links = $$
("#nav a");
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(l => { const t = $(l.getAttribute("href")); t && so.observe(t); });
})();