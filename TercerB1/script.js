const introScreen = document.querySelector(".intro-screen");
const scrollContainer = document.querySelector(".scrollable");

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
