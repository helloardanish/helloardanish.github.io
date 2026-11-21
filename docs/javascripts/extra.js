/* ===== A R Danish portfolio =====
   EDIT YOUR LINKS HERE. Leave '' for platforms you don't use yet; they show as dimmed icons. */
const SOCIALS = {
  mail:      "mailto:helloardanish@gmail.com",
  linkedin:  "https://www.linkedin.com/in/helloardanish/",
  github:    "https://github.com/helloardanish",
  skype:     "",
  facebook:  "",
  instagram: "",
  blog:      "",
  youtube:   "",
};
const LABELS = { mail:"Email", linkedin:"LinkedIn", github:"GitHub", skype:"Skype", facebook:"Facebook", instagram:"Instagram", blog:"Blog", youtube:"YouTube" };
/* Icons: Font Awesome Free (CC BY 4.0) */
const ICONS = {"mail": ["0 0 512 512", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"], "linkedin": ["0 0 448 512", "M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"], "github": ["0 0 512 512", "M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"], "skype": ["0 0 448 512", "M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7-19-14.7-42.6-23.4-68.3-23.4-61.8 0-112 50.2-112 112 0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zM230.1 391.3c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"], "facebook": ["0 0 320 512", "M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"], "instagram": ["0 0 448 512", "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"], "blog": ["0 0 512 512", "M224 24c0-13.3 10.7-24 24-24 145.8 0 264 118.2 264 264 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-119.3-96.7-216-216-216-13.3 0-24-10.7-24-24zM80 96c26.5 0 48 21.5 48 48l0 224c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144S255.5 512 176 512 32 447.5 32 368l0-224c0-26.5 21.5-48 48-48zm168 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120-13.3 0-24-10.7-24-24s10.7-24 24-24z"], "youtube": ["0 0 576 512", "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]};
const CONTACT_EMAIL = "helloardanish@gmail.com";

function renderSocials() {
  document.querySelectorAll(".socials").forEach(box => {
    box.innerHTML = Object.keys(ICONS).map(k => {
      const [vb, d] = ICONS[k];
      const url = SOCIALS[k];
      const empty = !url;
      const ext = !empty && !url.startsWith("mailto:") ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="soc${empty ? " is-empty" : ""}" href="${empty ? "#" : url}"${ext} aria-label="${LABELS[k]}${empty ? " (link not added yet)" : ""}" title="${LABELS[k]}${empty ? " - coming soon" : ""}"${empty ? ' aria-disabled="true"' : ""}><svg viewBox="${vb}" aria-hidden="true"><path fill="currentColor" d="${d}"/></svg></a>`;
    }).join("");
    box.querySelectorAll(".is-empty").forEach(a => a.addEventListener("click", e => e.preventDefault()));
  });
}

function setupForm() {
  const f = document.getElementById("contact-form");
  if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    const v = n => f.elements[n].value.trim();
    const subject = v("subject") || "Portfolio enquiry from " + v("name");
    const body = "Hi Danish,\n\n" + v("message") + "\n\nRegards,\n" + v("name") + "\n" + v("email") + (v("phone") ? "\n" + v("phone") : "");
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
}

function setupNav() {
  const nav = document.querySelector(".pf-nav");
  if (!nav) return;
  const btn = nav.querySelector(".pf-burger");
  if (btn) btn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  const links = [...nav.querySelectorAll(".pf-links a")];
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { links.forEach(l => l.classList.remove("on")); const a = map.get(en.target.id); if (a) a.classList.add("on"); }
  }), { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

function setupBars() {
  const bars = document.querySelectorAll(".bar i");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    bars.forEach(b => b.style.width = b.dataset.w + "%"); return;
  }
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.style.width = en.target.dataset.w + "%"; io.unobserve(en.target); }
  }), { threshold: .4 });
  bars.forEach(b => io.observe(b));
}

function init() { renderSocials(); setupForm(); setupNav(); setupBars(); }
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
