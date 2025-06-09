document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target.classList.contains('left')) {
            target.classList.add('animate-left');
          } else if (target.classList.contains('right')) {
            target.classList.add('animate-right');
          }
          observer.unobserve(target); // Optional: only animate once
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll('.level').forEach(el => {
      observer.observe(el);
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
  
          // Skills Section Title
          if (el.classList.contains('skills-title')) {
            el.classList.add('zoom-in');
          }
  
          // Skill Cards
          if (el.classList.contains('skill-card')) {
            const index = [...el.parentElement.children].indexOf(el);
            if (index % 3 === 0) {
              el.classList.add('animate-left');
            } else if (index % 3 === 2) {
              el.classList.add('animate-right');
            } else {
              el.classList.add('zoom-in');
            }
          }
  
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1
    });
  
    // Observe elements
    document.querySelectorAll('.skills-title, .skill-card').forEach(el => {
      observer.observe(el);
    });
  });
  
  