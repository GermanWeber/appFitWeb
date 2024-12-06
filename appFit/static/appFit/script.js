console.log("Script cargado");


document.addEventListener("DOMContentLoaded", function () {
    // Obtener el user-agent del navegador
    const userAgent = navigator.userAgent.toLowerCase();

    // Verificar si es un dispositivo móvil
    const isMobile = /iphone|ipad|android|mobile/.test(userAgent);

    // Seleccionar los elementos de descarga y código QR
    const botonDescarga = document.getElementById("boton-descarga");
    const codigoQR = document.getElementById("codigo-qr");

    if (isMobile) {
        // Mostrar el botón de descarga y ocultar el código QR
        botonDescarga.style.display = "block";
        codigoQR.style.display = "none";
    } else {
        // Mostrar el código QR y ocultar el botón de descarga
        botonDescarga.style.display = "none";
        codigoQR.style.display = "block";
    }
});




// Selecciona todos los elementos con la clase 'texto'
const textos = document.querySelectorAll('.subtitulo');

// Crea un Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const texto = entry.target; // Elemento actual observado
    if (entry.isIntersecting) {
      // Agrega desplazamiento cuando es visible
      window.addEventListener('scroll', () => moverTexto(texto));
    } else {
      // Restaura la posición cuando no es visible
      texto.style.transform = 'translateX(0)';
    }
  });
});

// Observa cada texto individualmente
textos.forEach(texto => observer.observe(texto));

// Función para mover el texto
function moverTexto(texto) {
  const scrollY = window.scrollY;
  texto.style.transform = `translateX(${scrollY / 3}px)`; // Ajusta la velocidad aquí
}
