const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const link = document.getElementById('link');

const images = [
  { element: document.getElementById('image1'), start: 2, end: 5 },
  { element: document.getElementById('image2'), start: 6, end: 9 },
  { element: document.getElementById('image3'), start: 10, end: 13 }
];

// Cuando termina el primer video, empieza el segundo
video1.addEventListener('ended', () => {
  video1.style.display = 'none';
  video2.style.display = 'block';
  video2.play();
});

// Mostrar imágenes gradualmente durante el segundo video
video2.addEventListener('timeupdate', () => {
  const currentTime = video2.currentTime;
  images.forEach(img => {
    if (currentTime >= img.start && currentTime < img.end) {
      img.element.style.opacity = 1;
    } else {
      img.element.style.opacity = 0;
    }
  });
});

// Mostrar link cuando termina el segundo video
video2.addEventListener('ended', () => {
  link.style.display = 'block';
});