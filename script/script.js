// ------------------------------ Start Banner ----------------------------------- //
window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#579AF2", "#F25D07"], // Azul e Laranja Neon
  maxParticles: 200,
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















// Função para rolagem suave personalizada
function smoothScrollTo(targetElement, duration) {
  const startPosition = window.pageYOffset; // Posição atual da rolagem
  const targetPosition = targetElement.offsetTop; // Posição de destino
  const distance = targetPosition - startPosition; // Distância a ser percorrida
  const startTime = performance.now(); // Tempo de início da animação

  // Função de animação
  function scroll() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Progresso da animação (de 0 a 1)

    window.scrollTo(0, startPosition + distance * progress); // Atualiza a posição da rolagem

    if (progress < 1) {
      requestAnimationFrame(scroll); // Continuar a animação até o fim
    }
  }

  // Inicia a animação
  requestAnimationFrame(scroll);
}

// Seleciona todos os links com href começando com #
const links = document.querySelectorAll('a[href^="#"]');

// Adiciona o evento de clique em cada link
links.forEach(link => {
  link.addEventListener('click', function (e) {
    // Previne o comportamento padrão de rolagem
    e.preventDefault();

    // Seleciona a seção de destino
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Chama a função de rolagem suave com duração de 1.5 segundos (1500ms)
    smoothScrollTo(targetElement, 1500);
  });
});