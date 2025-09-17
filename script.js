// Initialize AOS for scroll animations
AOS.init({
  duration: 1000,  // animation duration
  once: true       // animate only once
});

// Typed.js effect in Hero section
var typed = new Typed('#typed', {
  strings: ["Mukul Kumar Sharma", "Cloud Engineer", "AWS Enthusiast"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Circular Skill Charts Animation
const circles = document.querySelectorAll('.skill-circle');

function animateSkills() {
  const windowHeight = window.innerHeight;
  circles.forEach(circle => {
    const top = circle.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      // fill the circle using conic-gradient based on data-percent
      circle.style.background = `conic-gradient(#0d47a1 ${circle.dataset.percent}%, #eee 0%)`;
    }
  });
}

// Trigger skill animation on scroll and on load
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
