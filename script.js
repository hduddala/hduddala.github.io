// ---- Mobile nav -------------------------------------------------
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// close the menu after tapping a link
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// ---- Nav hairline on scroll ------------------------------------
const nav = document.getElementById('nav');
const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---- Scroll reveal ---------------------------------------------
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));
  // Failsafe: never leave content invisible if the observer misfires.
  setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 2500);
} else {
  reveals.forEach((el) => el.classList.add('in'));
}
