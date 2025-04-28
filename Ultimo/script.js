window.onload = function() {
    const totalVentanas = 5;
    const delayEntreVentanas = 300;
    let contador = 0;

    const imagenes = [
      "assets/54.png",
      "assets/55.png",
      "assets/56.png",
      "assets/57.png",
      "assets/58.png"
    ];

    function crearVentana(numero) {
      let ventana = document.createElement("div");
      ventana.className = "ventana";
      ventana.style.left = `${Math.random() * (window.innerWidth - 240)}px`;
      ventana.style.top = `${Math.random() * (window.innerHeight - 180)}px`;

      ventana.innerHTML = `
        <div class="cerrar">×</div>
        <img src="${imagenes[numero]}" alt="imagen ${numero + 1}">
      `;

      ventana.querySelector(".cerrar").onclick = () => {
        ventana.remove();
        verificarVentanas();
      };

      document.body.appendChild(ventana);
      ventana.style.display = "block";
      ventana.style.opacity = 1;
    }

    function lanzarVentanasUnaPorUna() {
      if (contador < totalVentanas) {
        crearVentana(contador);
        contador++;
        setTimeout(lanzarVentanasUnaPorUna, delayEntreVentanas);
      }
    }

    setTimeout(lanzarVentanasUnaPorUna, 500);

    const video = document.getElementById('videoFondo');
    video.onended = function() {
      document.getElementById('imagenFinal').style.display = 'block';
    };

    function verificarVentanas() {
      if (document.querySelectorAll('.ventana').length === 0) {
        mostrarImagenesGradualmente();
      }
    }

    function mostrarImagenesGradualmente() {
      const imagenesFade = document.querySelectorAll('.fade-img');
      let index = 0;

      function mostrarSiguiente() {
        if (index < imagenesFade.length) {
          const img = imagenesFade[index];
          img.style.left = 'calc(90% - 310px)';
          img.style.top = 'calc(90% - 310px)';
          img.style.opacity = 1;

          setTimeout(() => {
            img.style.opacity = 0;
            index++;
            setTimeout(mostrarSiguiente, 700);
          }, 1500);
        }
      }

      mostrarSiguiente();
    }
  };