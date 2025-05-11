// GSAP Animations
window.onload = () => {
  gsap.from(".hero-text", { x: -100, opacity: 0, duration: 1.5 });
  gsap.from(".hero-image img", { x: 100, opacity: 0, duration: 1.5 });

  // Hover Effects for Buttons
  gsap.from(".cta-buttons button", {
    scale: 0.9,
    duration: 0.5,
    opacity: 0.5,
    stagger: 0.3,
  });
};
