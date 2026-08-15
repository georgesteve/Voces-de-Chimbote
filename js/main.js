// VOCES DE CHIMBOTE — interacciones mínimas

document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Revelado suave al hacer scroll.
  // Los elementos son visibles por defecto (ver CSS); solo se "arman" para
  // animar si el navegador soporta IntersectionObserver. Así el contenido
  // nunca depende de que el JS se ejecute correctamente.
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => {
      el.classList.add('reveal-armed');
      io.observe(el);
    });
  }

  // Resalta el enlace activo del menú según la sección visible
  const sections = document.querySelectorAll('main [id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if ('IntersectionObserver' in window && sections.length && navAnchors.length) {
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => navIo.observe(s));
  }
});
