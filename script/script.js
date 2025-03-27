// ------------------------------ Start Banner ----------------------------------- //
window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#579AF2", "#F25D07"], // Azul e Laranja Neon
  maxParticles: 150,
  connectParticles: true, // Conecta as partículas
  move: {
    enable: true,
    speed: 2,
    direction: "none", // Direção aleatória
    random: true,
  },
  size: {
    value: 5,
    random: true,
    animation: {
      enable: true,
      speed: 5,
      minimumValue: 1,
    },
  },
  shape: {
    type: "circle", // Partículas circulares
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
  // Efeito Neon: Adicionando um brilho ao redor das partículas
  particles: {
    style: {
      boxShadow:
        "0 0 10px 3px rgba(87, 154, 242, 0.7), 0 0 20px 5px rgba(242, 93, 7, 0.6)",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#FFFFFF", "#579AF2", "#F25D07"],
        maxParticles: 150,
        connectParticles: false,
      },
    },
  ],
});
// ------------------------------ End Banner ----------------------------------- //



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".carousel",
  { x: "-24.5%" },
  {
    x: "26%",
    ease: "none",

    scrollTrigger: {
      trigger: "#carouselCont",
      // markers: true,
      start: "+=0",      
      scrub: 2,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".carouselTec",
  { x: "10%" },
  {
    x: "-41%",
    ease: "none",
    scrollTrigger: {
      // markers: true,
      trigger: "#carouselCont",
      start: "+=0",      
      scrub: 2,
      pin: true,
    },
  }
);


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".servicosContainer",
  { x: "50%" },
  {
    x: "-83%",
    ease: "none",
    scrollTrigger: {
      // markers: true,
      trigger: "#servicos",
      start: "+=0",
      end: "+=600",    
      scrub: 2,
      pin: true,
    },
  }
);












