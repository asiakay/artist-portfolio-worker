document.addEventListener('DOMContentLoaded', () => {
  console.log('Artist portfolio loaded.');

  // Added fade-in intersection observer to animate sections on scroll
  const revealSections = document.querySelectorAll('section');

  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, {
    threshold: 0.2,
  });

  revealSections.forEach((section) => {
    observer.observe(section);
  });
});
