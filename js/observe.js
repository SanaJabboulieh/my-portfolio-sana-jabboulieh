
    // file: js/observe.js
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.project-details').forEach(el => {
    observer.observe(el);
  });
});