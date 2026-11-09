(function(){
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // nav
  var nav = document.getElementById("nav"), toggle = document.getElementById("navToggle"), links = document.getElementById("navLinks");
  function onScroll(){ nav.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
  toggle.addEventListener("click", function(){
    var o = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", o); toggle.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape"){ links.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); closeLb(); }});

  // page transitions
  document.addEventListener("click", function(e){
    var a = e.target.closest("a"); if(!a || reduce) return;
    var h = a.getAttribute("href");
    if(!h || a.target==="_blank" || h.charAt(0)==="#" || /^(mailto:|tel:|https?:)/.test(h) || a.hasAttribute("download") || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault(); document.body.classList.add("leaving");
    setTimeout(function(){ location.href = a.href; }, 220);
  });
  window.addEventListener("pageshow", function(e){ if(e.persisted) document.body.classList.remove("leaving"); });

  // reveal + stagger
  var rv = [].slice.call(document.querySelectorAll(".rv"));
  rv.forEach(function(el){
    var sib = el.parentElement ? [].slice.call(el.parentElement.children).filter(function(c){return c.classList.contains("rv");}) : [];
    el.style.setProperty("--i", Math.min(sib.indexOf(el), 6));
  });
  if("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }}); },{threshold:.12, rootMargin:"0px 0px -40px 0px"});
    rv.forEach(function(el){ io.observe(el); });
  } else rv.forEach(function(el){ el.classList.add("in"); });

  // counters
  function count(el){
    var to = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1]||"").length, suf = el.dataset.suffix||"";
    if(reduce){ el.textContent = to.toFixed(dec)+suf; return; }
    var t0 = performance.now(), d = 1400;
    (function step(t){ var p = Math.min((t-t0)/d,1), v = to*(1-Math.pow(1-p,3)); el.textContent = v.toFixed(dec)+suf; if(p<1) requestAnimationFrame(step); })(t0);
  }
  var cs = [].slice.call(document.querySelectorAll("[data-count]"));
  if("IntersectionObserver" in window){
    var co = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ count(e.target); co.unobserve(e.target); }}); },{threshold:.6});
    cs.forEach(function(c){ co.observe(c); });
  } else cs.forEach(count);

  // parallax hero
  var glow = document.querySelector(".hero__glow"), fig = document.querySelector(".hero__figure");
  if((glow||fig) && !reduce){
    var tick = false;
    window.addEventListener("scroll", function(){
      if(tick) return; tick = true;
      requestAnimationFrame(function(){
        var y = Math.min(window.scrollY, 900);
        if(glow) glow.style.transform = "translate3d(0,"+(y*.18)+"px,0)";
        if(fig && window.innerWidth>860) fig.style.transform = "translate3d(0,"+(y*-.06)+"px,0)";
        tick = false;
      });
    },{passive:true});
  }

  // lightbox
  var lb = document.getElementById("lightbox"), lbImg = document.getElementById("lbImg"), lbCap = document.getElementById("lbCap");
  function openLb(src, cap){ lbImg.src = src; lbImg.alt = cap||""; lbCap.textContent = cap||""; lb.classList.add("open"); lb.setAttribute("aria-hidden","false"); }
  function closeLb(){ if(!lb) return; lb.classList.remove("open"); lb.setAttribute("aria-hidden","true"); }
  document.addEventListener("click", function(e){
    var t = e.target.closest("[data-zoom]");
    if(t){ openLb(t.dataset.zoom, t.dataset.cap); return; }
    if(e.target === lb || e.target.id === "lbClose") closeLb();
  });
})();
