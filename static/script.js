// MENU MOVIL - BARRA NAVEGADORA
  const botonMenu = document.getElementById('botonMenu');
  const enlacesNav = document.getElementById('enlacesNav');
  if(botonMenu) {
    botonMenu.addEventListener('click', () => enlacesNav.classList.toggle('activo'));
  }
  document.querySelectorAll('.enlaces-nav a').forEach(enlace => {
    enlace.addEventListener('click', () => enlacesNav.classList.remove('activo'));
  });

  // DESPLAZAMIENTO SUAVE INTERACTIVO
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      const destinoId = this.getAttribute('href');
      if(destinoId === "#" || destinoId === "") return;
      const destino = document.querySelector(destinoId);
      if(destino) {
        e.preventDefault();
        window.scrollTo({ top: destino.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  // SIMULACION DEL FORMULARIO DE CONTACTO 
  const formulario = document.getElementById('formularioContacto');
  const retroalimentacion = document.getElementById('retroalimentacionForm');
  if(formulario) {
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre')?.value.trim();
      const correo = document.getElementById('correo')?.value.trim();
      const mensaje = document.getElementById('mensaje')?.value.trim();
      if(!nombre || !correo || !mensaje) {
        retroalimentacion.innerHTML = '<span style="color:#C96A4E;">⚠️ Todos los campos son obligatorios.</span>';
        return;
      }
      if(!correo.includes('@')) {
        retroalimentacion.innerHTML = '<span style="color:#C96A4E;">📧 Correo electrónico inválido.</span>';
        return;
      }
      retroalimentacion.innerHTML = '<span style="color:#2C7A5E;">✓ Mensaje enviado. ¡Gracias por contactarme!</span>';
      formulario.reset();
      setTimeout(() => retroalimentacion.innerHTML = '', 4500);
    });
  }

  // CAMBIO DE FONDO DEL NAVEGADOR AL REALIZAR EL SCROLL
  window.addEventListener('scroll', () => {
    const barraNav = document.querySelector('nav');
    if(window.scrollY > 30) barraNav.style.background = 'rgba(244, 248, 254, 0.97)';
    else barraNav.style.background = 'rgba(244, 248, 254, 0.9)';
  });