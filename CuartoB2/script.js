const video = document.getElementById("video");
const imageContainer = document.getElementById("image-container");

video.addEventListener("ended", () => {
    video.style.display = "none"; // Oculta el video
    imageContainer.style.display = "block"; // Muestra la imagen con el enlace
});

document.addEventListener("click", () => {
    const audio = document.getElementById("background-audio");
    audio.muted = false; // Quitar el muteo después de la interacción
    audio.play();
}, { once: true });