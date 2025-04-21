const introScreen = document.querySelector(".intro-screen");
const scrollContainer = document.querySelector(".scrollable");
const enlaceFinal = document.getElementById("enlace-final");

// LINK SIG PAG
scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollLeft <= 2) {
        // Estamos al final visual (izquierda)
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

let autoScroll = setInterval(() => {
    if (scrollContainer.scrollLeft <= 0) {
      clearInterval(autoScroll); // Opcional: detiene el scroll cuando llega al final
    } else {
      scrollContainer.scrollLeft -= 1;
    }
  }, 10);

  window.addEventListener("load", () => {
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
});

