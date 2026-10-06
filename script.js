/* ====== EDIT THESE LINES ====== */
const WHATSAPP_NUMBER = "919675608880";                      // country code + number, no + or spaces
const INSTAGRAM_URL   = "https://www.instagram.com/anushkathakur_068";
const BOOKING_URL     = "";                                   // paste your Google Calendar booking link here (https://...)
/* ================================ */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = t => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(t);
$$("[data-wa]").forEach(a => a.href = wa("Hello Anushka, I would like to book a trial yoga class."));
$$("[href^='https://www.instagram.com']").forEach(a => a.href = INSTAGRAM_URL);
/* Until a booking link is added, booking buttons scroll to the enquiry form (never a dead link). */
if (/^https:\/\//.test(BOOKING_URL)) $$("[data-booking]").forEach(a => { a.href = BOOKING_URL; a.target = "_blank"; a.rel = "noopener"; });
$("#yr").textContent = new Date().getFullYear();

const burger = $(".burger"), menu = $("#menu"), nav = $(".nav");
const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
burger.addEventListener("click", e => { e.stopPropagation(); setMenu(!menu.classList.contains("open")); });
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("click", e => { if (!e.target.closest(".nav")) setMenu(false); });
addEventListener("resize", () => { if (innerWidth >= 900) setMenu(false); });
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

$$("[data-pick]").forEach(a => a.addEventListener("click", () => { const s = $("#cls"); for (const o of s.options) if (o.text === a.dataset.pick) s.value = o.value; }));
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }) : null;
$$(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, st = $("#status");
  if (!f.name.value.trim() || !f.email.validity.valid) { st.textContent = "Please enter your name and a valid email."; return; }
  window.open(wa(`Hello Anushka, I'm ${f.name.value}. Email: ${f.email.value}. Phone: ${f.phone.value || "-"}. Preferred class: ${f.cls.value}. ${f.msg.value}`), "_blank", "noopener");
  st.textContent = "Opening WhatsApp with your enquiry…";
});

const lb = $("#lb"), lbi = $("img", lb);
document.addEventListener("click", e => { const t = e.target.closest("[data-zoom]"); if (t) { lbi.src = t.src; lbi.alt = t.alt; lb.hidden = false; } else if (e.target.closest("#lb")) lb.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") { lb.hidden = true; setMenu(false); } });
