const introScreen = document.querySelector(".intro-screen");
const scrollContainer = document.querySelector(".scrollable");
const enlaceFinal = document.getElementById("enlace-final");

// LINK SIG PAG
scrollContainer.addEventListener("scroll", () => {
    let scrollMaxX = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft >= scrollMaxX - 5) { 
        enlaceFinal.style.display = "block"; // Muestra el enlace
    } else {
        enlaceFinal.style.display = "none"; // Oculta el enlace
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
