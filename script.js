const introScreen = document.querySelector(".intro-screen");
const introVideo = document.getElementById("intro-video");
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

// Función para ocultar la pantalla de introducción
function hideIntro() {
    introScreen.classList.add("intro-hidden");
    // Remueve los eventos para que no interfieran después
    document.removeEventListener("click", hideIntro);
    document.removeEventListener("keydown", hideIntro);
}

// Detecta clic o cualquier tecla SOLO si la intro está activa
document.addEventListener("click", hideIntro);
document.addEventListener("keydown", hideIntro);

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

//trigger warning
console.log("holaa consola");
window.alert("ADVERTENCIA: Este contenido puede ser sensible. Para tener una mejor experiencia le recomendamos usar la pantalla completa (F11). Y dar doble click al iniciar cada página.");
let nombre = "anggg";
document.getElementById("nombre").innerHTML=nombre;
