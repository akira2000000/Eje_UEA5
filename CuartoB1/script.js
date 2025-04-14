const introScreen = document.querySelector(".intro-screen");
const scrollContainer = document.querySelector(".scrollable");
const enlaceInicio = document.getElementById("enlace-inicio");
const enlaceFinal = document.getElementById("enlace-final");

// LINK SIG PAG
    // Mostrar/ocultar enlaces según posición del scroll
    scrollContainer.addEventListener("scroll", () => {
        const scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  
        if (scrollContainer.scrollLeft > 20) {
          enlaceInicio.style.display = "none";
        } else {
          enlaceInicio.style.display = "block";
        }
  
        if (scrollContainer.scrollLeft >= scrollMax - 5) {
          enlaceFinal.style.display = "block";
        } else {
          enlaceFinal.style.display = "none";
        }
      });

// Detecta el scroll del mouse y lo convierte en horizontal
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY * 2; // Aumenta la velocidad del desplazamiento
});

document.addEventListener("click", () => {
    const audio = document.getElementById("background-audio");
    audio.muted = false; // Quitar el muteo después de la interacción
    audio.play();
}, { once: true });