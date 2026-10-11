(() => {
  "use strict";
  const config = window.PORTFOLIO_CONFIG || {};
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const mobile = window.matchMedia("(max-width: 760px)");

  function closeMenu(restoreFocus = false) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector("span").textContent = "＋";
    if (restoreFocus) toggle.focus();
  }
  header.classList.add("menu-enabled");
  toggle.hidden = !mobile.matches;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector("span").textContent = open ? "−" : "＋";
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu(mobile.matches);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
  });
  document.addEventListener("click", event => {
    if (!header.contains(event.target)) closeMenu();
  });
  mobile.addEventListener("change", () => { toggle.hidden = !mobile.matches; closeMenu(); });

  let linkedin;
  try {
    const url = new URL(config.linkedinUrl);
    if (url.protocol === "https:" && /^(www\.)?linkedin\.com$/.test(url.hostname) && url.pathname.startsWith("/in/")) linkedin = url.href;
  } catch { /* Keep missing profile links visibly pending. */ }
  if (linkedin) {
    document.querySelectorAll("[data-linkedin]").forEach(link => { link.href = linkedin; link.hidden = false; });
    document.querySelectorAll("[data-linkedin-pending]").forEach(label => { label.hidden = true; });
  }
  if (config.resumeAvailable && /^assets\/[a-z0-9._/-]+\.pdf$/i.test(config.resumePath) && !config.resumePath.includes("..")) {
    document.querySelectorAll("[data-resume]").forEach(link => { link.href = config.resumePath; link.hidden = false; });
    document.querySelectorAll("[data-resume-pending]").forEach(label => { label.hidden = true; });
  }
  document.querySelector("#year").textContent = String(new Date().getFullYear());
  if ("IntersectionObserver" in window) {
    const navLinks = [...nav.querySelectorAll("a")];
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach(entry => {
        navLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
  }
})();
