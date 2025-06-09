// Typing effect
const typed = new Typed("#typed", {
  strings: ["Flutter Development", "Mobile App UI/UX", "App Architecture", "Clean Code"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// portfolio effect
const portfolio = new Typed("#portfolio", {
    strings: ["My Portfolio"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

// Particles background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#000" },
    line_linked: {
      enable: true,
      color: "#000",
    },
    move: {
      enable: true,
      speed: 2,
    }
  }
});
