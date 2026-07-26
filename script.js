// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll('.section, .hero');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// Animate skill bars to their data-driven width when scrolled into view
const skillFills = document.querySelectorAll('.skill-bar-fill');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
skillFills.forEach((el) => skillObserver.observe(el));
