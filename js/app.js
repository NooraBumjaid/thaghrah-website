(function () {
  var page = document.body.getAttribute("data-page") || "home";
  var navMount = document.getElementById("site-nav");
  var footerMount = document.getElementById("site-footer");
  var navItems = [
    ["home", "Home", "./index.html"],
    ["about", "About", "./about.html"],
    ["features", "Features", "./features.html"],
    ["architecture", "Architecture", "./architecture.html"],
    ["demo", "Demo", "./demo.html"],
    ["team", "Team", "./team.html"],
    ["resources", "Resources", "./resources.html"],
  ];

  if (navMount) {
    var links = navItems
      .map(function (item) {
        var cls = item[0] === page ? ' class="active"' : "";
        return '<a href="' + item[2] + '"' + cls + ">" + item[1] + "</a>";
      })
      .join("");
    navMount.innerHTML =
      '<div class="site-nav-wrap"><nav class="container nav">' +
      '<div class="nav-brand-group">' +
      '<a class="university-nav-block" href="https://www.uob.edu.bh" target="_blank" rel="noopener noreferrer" aria-label="University of Bahrain, College of Information Technology, Department of Information Systems">' +
      '<span class="university-nav-text">' +
      '<span class="university-nav-title">University of Bahrain</span>' +
      '<span class="university-nav-line">College of Information Technology</span>' +
      '<span class="university-nav-line">Department of Information Systems</span>' +
      "</span>" +
      '<span class="university-nav-logo-wrap"><img class="university-nav-logo" src="./assets/download-removebg-preview.png" alt="" width="80" height="96" /></span>' +
      "</a>" +
      '<span class="nav-brand-divider" aria-hidden="true"></span>' +
      '<a class="brand" href="./index.html" aria-label="Thaghrah home"><img class="brand-logo" src="./assets/logo-nav.png" alt="Thaghrah logo" /><h1>Thaghrah</h1></a>' +
      "</div>" +
      '<button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">Menu</button><div class="nav-links">' +
      links +
      "</div></nav></div>";
  }

  if (footerMount) {
    footerMount.innerHTML =
      '<footer class="site-footer"><div class="container footer-grid"><div><div class="footer-brand"><img class="footer-logo" src="./assets/logo-nav.png" alt="Thaghrah logo" /><h4>Thaghrah</h4></div><p>University of Bahrain Senior Project 2025/2026</p></div><div><h4>Quick Links</h4><a href="./index.html">Home</a><a href="./features.html">Features</a><a href="./architecture.html">Architecture</a></div><div><h4>Team</h4><p>Cybersecurity Graduates - Batch 2026</p></div><div><h4>Contact</h4><a href="mailto:info@thaghrah.site">info@thaghrah.site</a></div></div><div class="container footer-bottom">© 2026 Thaghrah Senior Project Team. All rights reserved.</div></footer>';
  }

  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  function isInternalHtmlNavigation(href) {
    if (!href || href === "#") return false;
    if (href.charAt(0) === "#") return false;
    if (/^https?:\/\//i.test(href)) return false;
    if (/^mailto:/i.test(href) || /^tel:/i.test(href)) return false;
    return /\.html([?#]|$)/i.test(href);
  }
  document.querySelectorAll("a[href]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!isInternalHtmlNavigation(href)) return;
      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(function () {
        window.location.href = href;
      }, 230);
    });
  });

  /* Explicit new-tab open for external repo links (works when plain target=_blank fails). */
  document.querySelectorAll("a.open-external-tab[href]").forEach(function (link) {
    link.addEventListener(
      "click",
      function (e) {
        var url = link.getAttribute("href");
        if (!url || !/^https?:\/\//i.test(url)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        var tab = window.open(url, "_blank", "noopener,noreferrer");
        if (!tab) {
          window.location.assign(url);
        }
      },
      true
    );
  });

  requestAnimationFrame(function () {
    document.body.classList.add("page-ready");
  });

  function addHeroEnhancements() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    if (!hero.querySelector(".hero-grid")) {
      var grid = document.createElement("div");
      grid.className = "hero-grid";
      hero.appendChild(grid);
    }
    if (!hero.querySelector(".hero-spotlight")) {
      var spot = document.createElement("div");
      spot.className = "hero-spotlight";
      hero.appendChild(spot);
    }
    if (!hero.querySelector(".hero-network")) {
      var svgWrap = document.createElement("div");
      svgWrap.className = "hero-network";
      svgWrap.setAttribute("aria-hidden", "true");
      svgWrap.innerHTML =
        '<svg viewBox="0 0 1200 420" preserveAspectRatio="none" width="100%" height="100%"><g stroke="rgba(138,203,208,0.24)" stroke-width="1.2" fill="none"><path d="M40 280 C180 210, 320 330, 480 250 S780 190, 1160 240"><animate attributeName="d" dur="7s" repeatCount="indefinite" values="M40 280 C180 210, 320 330, 480 250 S780 190, 1160 240;M40 260 C200 220, 300 300, 480 245 S800 210, 1160 220;M40 280 C180 210, 320 330, 480 250 S780 190, 1160 240" /></path><path d="M80 340 C240 270, 360 370, 590 300 S900 260, 1170 315" opacity=".7"><animate attributeName="d" dur="8.5s" repeatCount="indefinite" values="M80 340 C240 270, 360 370, 590 300 S900 260, 1170 315;M80 322 C270 260, 390 360, 590 286 S900 275, 1170 302;M80 340 C240 270, 360 370, 590 300 S900 260, 1170 315" /></path></g><g fill="rgba(156,232,238,0.8)"><circle cx="220" cy="255" r="2.2"><animate attributeName="cy" values="255;248;255" dur="3s" repeatCount="indefinite" /></circle><circle cx="490" cy="248" r="2.1"><animate attributeName="cy" values="248;241;248" dur="3.8s" repeatCount="indefinite" /></circle><circle cx="880" cy="260" r="2.2"><animate attributeName="cy" values="260;252;260" dur="3.2s" repeatCount="indefinite" /></circle></g></svg>';
      hero.appendChild(svgWrap);
    }
    var spotlight = hero.querySelector(".hero-spotlight");
    var network = hero.querySelector(".hero-network");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && spotlight && network) {
      hero.addEventListener("mousemove", function (e) {
        var rect = hero.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        spotlight.style.transform = "translate(" + px * 18 + "px," + py * 14 + "px) scale(1.02)";
        network.style.transform = "translate(" + px * 10 + "px," + py * 8 + "px)";
      });
      hero.addEventListener("mouseleave", function () {
        spotlight.style.transform = "";
        network.style.transform = "";
      });
    }
  }
  addHeroEnhancements();

  function setupParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (document.querySelector(".floating-particles")) return;
    var layer = document.createElement("div");
    layer.className = "floating-particles";
    for (var i = 0; i < 26; i++) {
      var dot = document.createElement("span");
      dot.style.left = String(Math.random() * 100) + "%";
      dot.style.animationDuration = String(13 + Math.random() * 18) + "s";
      dot.style.animationDelay = String(Math.random() * -20) + "s";
      dot.style.opacity = String(0.22 + Math.random() * 0.4);
      layer.appendChild(dot);
    }
    document.body.appendChild(layer);
  }
  setupParticles();

  function setupCardMouseGlow() {
    var cards = document.querySelectorAll(
      ".mini-stat, .solution-card, .info-card, .team-card, .resource-card, .security-card, .gamification-card, .category-card, .flow-step, .tech-chip, .demo-video-panel"
    );
    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height) * 100 + "%");
      });
    });
  }
  setupCardMouseGlow();

  function setupDemoVideos() {
    document.querySelectorAll(".demo-video-embed").forEach(function (frame) {
      var id = (frame.getAttribute("data-youtube-id") || "").trim();
      var wrap = frame.closest(".video-frame");
      if (id) {
        frame.src = "https://www.youtube.com/embed/" + encodeURIComponent(id);
        if (wrap) wrap.classList.remove("is-empty");
      } else if (wrap) {
        wrap.classList.add("is-empty");
      }
    });

    var tabs = document.querySelectorAll(".demo-tab");
    var panels = document.querySelectorAll(".demo-tab-panel");
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var key = tab.getAttribute("data-tab");
        tabs.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle("active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach(function (panel) {
          var on = panel.getAttribute("data-panel") === key;
          panel.classList.toggle("active", on);
          panel.hidden = !on;
        });
      });
    });
  }
  setupDemoVideos();

  var diagramWrap = document.querySelector(".architecture-diagram-wrap");
  var lightbox = document.getElementById("diagramLightbox");
  var closeBtn = document.querySelector(".lightbox-close");
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  if (diagramWrap && lightbox) {
    diagramWrap.addEventListener("click", function () {
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  var slides = Array.prototype.slice.call(document.querySelectorAll(".preview-slide"));
  var dots = Array.prototype.slice.call(document.querySelectorAll(".preview-dot"));
  var activeIndex = 0;
  slides.forEach(function (slide) {
    var screen = slide.querySelector(".mockup-screen");
    if (!screen || slide.querySelector(".mockup-screen-wrap")) return;
    var wrap = document.createElement("div");
    wrap.className = "mockup-screen-wrap";
    var chrome = document.createElement("div");
    chrome.className = "browser-chrome";
    chrome.innerHTML = "<span></span><span></span><span></span>";
    screen.parentNode.insertBefore(wrap, screen);
    wrap.appendChild(chrome);
    wrap.appendChild(screen);
  });
  function showSlide(index) {
    activeIndex = index;
    slides.forEach(function (s, i) {
      s.classList.toggle("active", i === index);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === index);
    });
  }
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      var index = Number(dot.getAttribute("data-slide") || "0");
      showSlide(index);
    });
  });
  if (slides.length > 1) {
    setInterval(function () {
      showSlide((activeIndex + 1) % slides.length);
    }, 4200);
  }

  var previewLightbox = document.createElement("div");
  previewLightbox.className = "lightbox";
  previewLightbox.id = "previewLightbox";
  previewLightbox.setAttribute("aria-hidden", "true");
  previewLightbox.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close preview zoom">×</button><div class="preview-slide active" style="max-width:min(980px,94vw);width:100%;"></div>';
  document.body.appendChild(previewLightbox);
  var previewLightboxClose = previewLightbox.querySelector(".lightbox-close");
  var previewPanel = previewLightbox.querySelector(".preview-slide");

  function closePreviewLightbox() {
    previewLightbox.classList.remove("open");
    previewLightbox.setAttribute("aria-hidden", "true");
    previewPanel.innerHTML = "";
  }
  function openPreviewLightbox(sourceSlide) {
    previewPanel.innerHTML = sourceSlide.innerHTML;
    previewLightbox.classList.add("open");
    previewLightbox.setAttribute("aria-hidden", "false");
  }
  document.querySelectorAll(".preview-slide .mockup-screen").forEach(function (screen) {
    screen.addEventListener("click", function () {
      var slide = screen.closest(".preview-slide");
      if (slide) openPreviewLightbox(slide);
    });
  });
  previewLightbox.addEventListener("click", function (e) {
    if (e.target === previewLightbox) closePreviewLightbox();
  });
  if (previewLightboxClose) previewLightboxClose.addEventListener("click", closePreviewLightbox);

  var revealTargets = document.querySelectorAll(
    ".section, .section-heading, .mini-stat, .solution-card, .team-card, .resource-card, .info-card, .security-card, .gamification-card, .category-card, .flow-step, .architecture-diagram-wrap, .supervisor-appreciation, .tech-chip"
  );
  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el, index) {
      el.classList.add("reveal");
      if (el.classList.contains("section-heading")) {
        el.classList.add("heading-reveal");
      }
      if (
        el.classList.contains("mini-stat") ||
        el.classList.contains("solution-card") ||
        el.classList.contains("team-card") ||
        el.classList.contains("resource-card") ||
        el.classList.contains("info-card") ||
        el.classList.contains("security-card") ||
        el.classList.contains("gamification-card") ||
        el.classList.contains("category-card") ||
        el.classList.contains("flow-step") ||
        el.classList.contains("tech-chip")
      ) {
        el.classList.add("stagger");
        el.style.setProperty("--stagger-index", String(index % 8));
      }
    });
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  var progressBars = document.querySelectorAll(".progress-bar span");
  if ("IntersectionObserver" in window && progressBars.length) {
    var progressObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var target = entry.target.getAttribute("data-target-width");
          if (!target) {
            target = entry.target.style.width || "70%";
            entry.target.setAttribute("data-target-width", target);
          }
          entry.target.style.width = target;
          progressObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    progressBars.forEach(function (bar) {
      var current = bar.style.width || "70%";
      bar.setAttribute("data-target-width", current);
      bar.style.width = "0%";
      progressObserver.observe(bar);
    });
  }

  var counters = document.querySelectorAll(".counter");
  if ("IntersectionObserver" in window && counters.length) {
    var animateCounter = function (el) {
      var target = Number(el.getAttribute("data-count") || "0");
      var finalText = el.getAttribute("data-final-text");
      var current = 0;
      var step = Math.max(1, Math.ceil(target / 40));
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          clearInterval(timer);
          el.textContent = finalText || String(target);
          return;
        }
        el.textContent = String(current);
      }, 26);
    };
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      scrollTopBtn.classList.toggle("show", window.scrollY > 420);
    });
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var cvModal = document.getElementById("cvModal");
  var cvFrame = document.getElementById("cvModalFrame");
  var cvDownload = document.getElementById("cvModalDownload");
  var cvTitle = document.getElementById("cvModalTitle");
  if (cvModal && cvFrame && cvDownload) {
    function openCvModal(url, filename, personLabel) {
      cvFrame.src = url;
      cvDownload.href = url;
      cvDownload.setAttribute("download", filename || "");
      if (cvTitle) cvTitle.textContent = personLabel ? "CV — " + personLabel : "CV preview";
      cvModal.classList.add("open");
      cvModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeCvModal() {
      cvModal.classList.remove("open");
      cvModal.setAttribute("aria-hidden", "true");
      cvFrame.src = "";
      document.body.style.overflow = "";
    }
    document.querySelectorAll(".cv-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var url = btn.getAttribute("data-cv-url") || "";
        var filename = btn.getAttribute("data-cv-filename") || "";
        var label = btn.getAttribute("data-cv-label") || "";
        if (!url) return;
        openCvModal(url, filename, label);
      });
    });
    cvModal.querySelectorAll("[data-cv-close]").forEach(function (el) {
      el.addEventListener("click", closeCvModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && cvModal.classList.contains("open")) closeCvModal();
      if (e.key === "Escape" && previewLightbox.classList.contains("open")) closePreviewLightbox();
    });
  }

  var techIcons = {
    Flask: "FL",
    Python: "PY",
    SQLite: "DB",
    Wireshark: "WS",
    Scapy: "SC",
    "Grok / Groq": "AI",
    HTML: "HT",
    CSS: "CS",
    JavaScript: "JS",
  };
  document.querySelectorAll(".tech-chip").forEach(function (chip) {
    var key = (chip.textContent || "").trim();
    chip.setAttribute("data-icon", techIcons[key] || "•");
  });

  var gamificationCards = document.querySelectorAll(".gamification-card");
  gamificationCards.forEach(function (card) {
    var title = card.querySelector("h4");
    if (!title) return;
    if (title.textContent.indexOf("Completion") !== -1 && !card.querySelector(".confetti-preview")) {
      var confetti = document.createElement("div");
      confetti.className = "confetti-preview";
      confetti.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i>";
      title.insertAdjacentElement("afterend", confetti);
    }
  });
})();
