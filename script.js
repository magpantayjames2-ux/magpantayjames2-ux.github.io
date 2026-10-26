/* script.js — builds the page from data.js. You normally never need to edit this. */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) { return; }

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- helpers ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(id) { return document.getElementById(id); }
  function has(v) { return v !== undefined && v !== null && String(v).trim() !== ""; }
  function list(items, cls) {
    if (!items || !items.length) { return ""; }
    return '<ul class="' + (cls || "ticks") + '">' + items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  function chips(items) {
    if (!items || !items.length) { return ""; }
    return '<ul class="chips">' + items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  var ICON = '<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="10" y="9" width="44" height="34" rx="4"/><path d="M18 19h28M18 26h28M18 33h14"/>' +
    '<circle cx="42" cy="42" r="7"/><path d="M38 48l-2 9 6-3 6 3-2-9"/></svg>';
  function zoomable(src, caption, inner, label) {
    return '<button type="button" class="zoom" data-zoom="' + esc(src) + '" data-cap="' + esc(caption) +
      '" aria-label="' + esc(label || ("View larger: " + caption)) + '">' + inner + "</button>";
  }
  function imgTag(src, alt, extra) {
    return '<img data-img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"' + (extra || "") + ">";
  }

  /* ---------- hero ---------- */
  var o = S.owner;
  $("heroName").textContent = o.brand;
  $("heroTitle").textContent = o.title;
  $("heroIntro").textContent = o.intro;
  $("heroImg").src = o.heroImage;
  $("heroImg").alt = o.heroAlt;
  $("heroCapTitle").textContent = o.heroCaptionTitle;
  $("heroCapSub").textContent = o.heroCaptionSub;
  document.title = o.brand + " | " + o.title;

  $("highlights").innerHTML = (S.highlights || []).map(function (h) {
    return "<li><strong>" + esc(h.value) + "</strong><span>" + esc(h.label) + "</span></li>";
  }).join("");

  /* ---------- about ---------- */
  var a = S.about;
  $("aboutMedia").innerHTML = has(a.image)
    ? '<div class="about__photo">' + imgTag(a.image, a.imageAlt) + "</div>" : "";
  $("aboutText").innerHTML = a.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  if (a.current) {
    $("aboutCurrent").innerHTML =
      "<span class=\"current__label\">Currently</span>" +
      "<strong>" + esc(a.current.role) + "</strong>" +
      "<span>" + esc(a.current.company) + "</span>" +
      "<span class=\"muted\">" + esc(a.current.detail) + "</span>";
  } else { $("aboutCurrent").remove(); }

  /* ---------- education ---------- */
  (function () {
    var e = S.education, h = "";
    h += '<article class="edu__degree glass reveal">' +
      "<h3>" + esc(e.degree.title) + "</h3>" +
      '<p class="edu__school">' + esc(e.degree.school) + "</p>" +
      '<p class="muted">' + esc(e.degree.date) + "</p>" +
      (has(e.degree.note) ? "<p>" + esc(e.degree.note) + "</p>" : "") +
      "</article>";

    var t = e.thesis;
    h += '<article class="edu__thesis glass reveal">' +
      "<h3>Thesis: " + esc(t.title) + "</h3>" +
      "<p>" + esc(t.summary) + "</p>" +
      '<dl class="facts">' +
        "<div><dt>My role</dt><dd>" + esc(t.role) + "</dd></div>" +
        "<div><dt>Team</dt><dd>" + esc(t.team) + "</dd></div>" +
        (has(t.adviser) ? "<div><dt>Adviser</dt><dd>" + esc(t.adviser) + "</dd></div>" : "") +
      "</dl>" +
      '<ul class="results">' + t.results.map(function (r) {
        return "<li><strong>" + esc(r.value) + "</strong><span>" + esc(r.label) + "</span></li>";
      }).join("") + "</ul>" +
      chips(t.tech) +
      "</article>";

    var j = e.ojt;
    h += '<article class="edu__ojt glass reveal">' +
      "<h3>" + esc(j.title) + "</h3>" +
      '<p class="edu__school">' + esc(j.company) + "</p>" +
      '<p class="muted">' + esc(j.date) + "</p>" +
      list(j.responsibilities) +
      '<p class="subtle">Tools</p>' + chips(j.tools) +
      (has(j.highlight) ? '<p class="callout">' + esc(j.highlight) + "</p>" : "") +
      "</article>";

    h += '<aside class="edu__earlier reveal" aria-label="Earlier education">' +
      "<h3>Earlier education</h3><ul>" + e.earlier.map(function (s) {
        return "<li><span>" + esc(s.school) + "</span><span class=\"muted\">" + esc(s.years) + "</span></li>";
      }).join("") + "</ul></aside>";

    if (e.photos && e.photos.length) {
      h += '<div class="edu__photos reveal">' + e.photos.map(function (p) {
        return "<figure>" + zoomable(p.src, p.caption || "", imgTag(p.src, p.caption || "Education photo")) +
          (has(p.caption) ? "<figcaption>" + esc(p.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</div>";
    }
    $("educationBody").innerHTML = h;
  })();

  /* ---------- certifications ---------- */
  (function () {
    var certs = S.certificates || [];
    $("certGrid").innerHTML = certs.map(function (c) {
      var preview = has(c.image)
        ? zoomable(c.image, c.title, imgTag(c.image, "Certificate: " + c.title) + '<span class="cert__fallback" aria-hidden="true">' + ICON + "</span>", "View full certificate: " + c.title)
        : '<div class="cert__empty" aria-hidden="true"><span>' + ICON + "</span></div>";
      return '<article class="cert glass reveal">' +
        '<div class="cert__preview">' + preview + "</div>" +
        '<div class="cert__body">' +
          "<h3>" + esc(c.title) + "</h3>" +
          '<p class="cert__meta">' +
            (has(c.issuer) ? "<span>" + esc(c.issuer) + "</span>" : "") +
            (has(c.date) ? "<span>" + esc(c.date) + "</span>" : "") +
          "</p>" +
          (has(c.description) ? "<p>" + esc(c.description) + "</p>" : "") +
          (has(c.image)
            ? '<button type="button" class="link-btn" data-zoom="' + esc(c.image) + '" data-cap="' + esc(c.title) + '">View full certificate</button>'
            : '<p class="subtle">Certificate image coming soon.</p>') +
        "</div></article>";
    }).join("");

    var tr = S.training || [];
    $("trainingGrid").innerHTML = tr.length ? tr.map(function (t) {
      return '<article class="train glass reveal">' +
        (has(t.image) ? zoomable(t.image, t.title, imgTag(t.image, t.title)) : "") +
        '<div class="train__body">' +
          (has(t.type) ? '<span class="tag">' + esc(t.type) + "</span>" : "") +
          "<h4>" + esc(t.title) + "</h4>" +
          '<p class="cert__meta">' +
            (has(t.organizer) ? "<span>" + esc(t.organizer) + "</span>" : "") +
            (has(t.date) ? "<span>" + esc(t.date) + "</span>" : "") +
          "</p>" +
          (has(t.description) ? "<p>" + esc(t.description) + "</p>" : "") +
        "</div></article>";
    }).join("") : '<p class="empty glass">Seminar, workshop and training records are being added.</p>';
  })();

  /* ---------- achievements ---------- */
  $("achGrid").innerHTML = (S.achievements || []).map(function (x) {
    return '<article class="ach glass reveal">' +
      (has(x.image) ? '<div class="ach__img">' + zoomable(x.image, x.title, imgTag(x.image, x.title)) + "</div>" : "") +
      '<p class="ach__year">' + esc(x.year) + "</p>" +
      "<h3>" + esc(x.title) + "</h3>" +
      (has(x.issuer) ? '<p class="ach__issuer">' + esc(x.issuer) + "</p>" : "") +
      "<p>" + esc(x.description) + "</p>" +
      "</article>";
  }).join("");

  /* ---------- gallery builder (screenshots) ---------- */
  function gallery(shots, altPrefix) {
    if (!shots || !shots.length) { return ""; }
    return '<div class="shots">' + shots.map(function (s) {
      var mobile = s.device === "mobile";
      return '<figure class="shot ' + (mobile ? "shot--mobile" : "shot--desktop") + '">' +
        zoomable(s.src, s.caption || altPrefix, '<span class="shot__frame">' + imgTag(s.src, (altPrefix || "Screenshot") + ": " + (s.caption || "")) + "</span>") +
        (has(s.caption) ? "<figcaption>" + esc(s.caption) + "</figcaption>" : "") +
        "</figure>";
    }).join("") + "</div>";
  }

  /* ---------- featured project ---------- */
  (function () {
    var f = S.featured, h = "";
    h += '<header class="case__head reveal">' +
      '<span class="pill">Featured project</span>' +
      "<h2>" + esc(f.name) + "</h2>" +
      '<p class="case__tagline">' + esc(f.tagline) + "</p>" +
      "</header>";

    h += '<div class="case__own glass reveal">' +
      "<h3>Built end to end by one developer</h3>" +
      "<p>" + esc(f.ownership) + "</p>" +
      chips(f.owned) +
      "</div>";

    h += '<ul class="case__stats reveal">' + f.stats.map(function (s) {
      return "<li><strong>" + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></li>";
    }).join("") + "</ul>";

    h += '<div class="case__cols">' +
      '<article class="case__block glass reveal"><h3>Background</h3><p>' + esc(f.background) + "</p>" +
        '<h4>The problems</h4>' + list(f.problems, "crosses") + "</article>" +
      '<article class="case__block glass reveal"><h3>The solution</h3><p>' + esc(f.solution) + "</p>" +
        '<h4>Key features</h4>' + list(f.features) + "</article>" +
      "</div>";

    h += '<div class="case__section reveal"><h3>Technology stack</h3>' + chips(f.stack) + "</div>";

    h += '<div class="case__section reveal"><h3>Development journey</h3><ol class="journey">' +
      f.journey.map(function (j) {
        return "<li><strong>" + esc(j.title) + "</strong><span>" + esc(j.text) + "</span></li>";
      }).join("") + "</ol></div>";

    h += '<div class="case__section reveal"><h3>Challenges solved</h3><div class="challenges">' +
      f.challenges.map(function (c) {
        return '<article class="challenge glass"><h4>' + esc(c.title) + "</h4>" +
          '<p><span class="lbl">Problem</span>' + esc(c.problem) + "</p>" +
          '<p><span class="lbl lbl--ok">Solution</span>' + esc(c.solution) + "</p></article>";
      }).join("") + "</div></div>";

    h += '<div class="case__section case__impact glass reveal"><h3>Impact</h3>' + list(f.impact) + "</div>";

    h += '<div class="case__section reveal"><h3>Screenshots</h3>';
    if (f.screenshots && f.screenshots.length) {
      h += gallery(f.screenshots, f.name);
    } else {
      h += '<div class="shots-soon glass"><p>Sanitized screenshots are being prepared. Planned screens:</p>' + chips(f.screenshotSlots) + "</div>";
    }
    if (has(f.privacyNote)) { h += '<p class="privacy">' + esc(f.privacyNote) + "</p>"; }
    h += "</div>";

    h += '<div class="case__section reveal"><h3>Roadmap</h3>' + chips(f.roadmap) + "</div>";

    $("featuredBody").innerHTML = h;
  })();

  /* ---------- other projects ---------- */
  $("projectList").innerHTML = (S.projects || []).map(function (p) {
    return '<article class="proj glass reveal">' +
      "<h3>" + esc(p.name) + "</h3>" +
      '<p class="muted">' + esc(p.context) + "</p>" +
      "<p>" + esc(p.summary) + "</p>" +
      '<div class="proj__cols">' +
        "<div><h4>Features</h4>" + list(p.features) + "</div>" +
        "<div><h4>Built with</h4>" + chips(p.stack) +
          (has(p.result) ? '<p class="callout">' + esc(p.result) + "</p>" : "") + "</div>" +
      "</div>" +
      gallery(p.screenshots, p.name) +
      "</article>";
  }).join("");

  /* ---------- skills ---------- */
  $("skillGrid").innerHTML = (S.skills || []).map(function (g) {
    return '<article class="skill glass reveal"><h3>' + esc(g.category) + "</h3><ul>" +
      g.items.map(function (i) {
        var lvl = (i.level || "").toLowerCase();
        return "<li><span>" + esc(i.name) + "</span>" +
          (lvl ? '<span class="level level--' + esc(lvl) + '">' + esc(i.level) + "</span>" : "") + "</li>";
      }).join("") + "</ul></article>";
  }).join("");

  /* ---------- services ---------- */
  $("serviceList").innerHTML = (S.services || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");

  /* ---------- resume ---------- */
  (function () {
    var r = S.resume || {}, h = "<div><h2>Resume</h2>" + list(r.summary || []) + "</div>";
    if (r.enabled) {
      h += '<div class="resume__actions">' +
        '<a class="btn btn--primary" href="' + esc(r.file) + '" target="_blank" rel="noopener">View resume</a>' +
        '<a class="btn btn--glass" href="' + esc(r.file) + '" download>Download PDF</a></div>';
    } else {
      h += '<div class="resume__actions"><p class="subtle">The PDF resume is being finalized.</p></div>';
    }
    $("resumeBox").innerHTML = h;
  })();

  /* ---------- contact ---------- */
  $("contactCta").textContent = o.contactCta;
  $("contactLinks").innerHTML =
    '<a class="btn btn--primary" href="mailto:' + esc(o.email) + '">' + esc(o.email) + "</a>" +
    '<a class="btn btn--glass" href="' + esc(o.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' +
    '<a class="btn btn--glass" href="' + esc(o.github) + '" target="_blank" rel="noopener">GitHub</a>';
  $("footerName").textContent = o.fullName;
  $("footerYear").textContent = "© " + new Date().getFullYear();

  /* ---------- missing images fail gracefully ---------- */
  function wireImages(scope) {
    var imgs = (scope || document).querySelectorAll("img[data-img]");
    Array.prototype.forEach.call(imgs, function (im) {
      function miss() {
        im.classList.add("is-missing");
        if (im.parentNode) { im.parentNode.classList.add("has-missing"); }
        var f = im.closest(".shot, .edu__photos figure, .ach__img");
        if (f) { f.style.display = "none"; }
      }
      if (im.complete && im.naturalWidth === 0 && im.getAttribute("src")) { miss(); }
      im.addEventListener("error", miss, { once: true });
    });
  }
  wireImages(document);

  /* ---------- lightbox ---------- */
  var lb = $("lightbox"), lbImg = $("lightboxImg"), lbCap = $("lightboxCap"), lastFocus = null;
  function openLB(src, cap) {
    lastFocus = document.activeElement;
    lbImg.src = src; lbImg.alt = cap || "";
    lbCap.textContent = cap || "";
    lb.hidden = false;
    document.body.classList.add("is-locked");
    $("lightboxClose").focus();
  }
  function closeLB() {
    lb.hidden = true; lbImg.removeAttribute("src");
    document.body.classList.remove("is-locked");
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-zoom]");
    if (t) { e.preventDefault(); openLB(t.getAttribute("data-zoom"), t.getAttribute("data-cap")); return; }
    if (e.target === lb || e.target.id === "lightboxClose") { closeLB(); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) { closeLB(); } });

  /* ---------- nav ---------- */
  var nav = $("nav"), toggle = $("navToggle"), links = $("navLinks");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  });
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* active section link */
  if ("IntersectionObserver" in window) {
    var map = {};
    Array.prototype.forEach.call(links.querySelectorAll("a"), function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          Object.keys(map).forEach(function (k) { map[k].removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) { spy.observe(s); } });
  }

  /* ---------- gentle reveal on scroll ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    Array.prototype.forEach.call(revealEls, function (el) { io.observe(el); });
  }
})();
