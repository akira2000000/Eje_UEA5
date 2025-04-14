const video = document.getElementById('myVideo');
const link = document.getElementById('link');
const playButton = document.getElementById('playButton');

const images = [
  { element: document.getElementById('image1'), start: 2, end: 5 },
  { element: document.getElementById('image2'), start: 6, end: 9 },
  { element: document.getElementById('image3'), start: 10, end: 13 }
];

video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;

  images.forEach(img => {
    if (currentTime >= img.start && currentTime < img.end) {
      img.element.style.opacity = 1;
    } else {
      img.element.style.opacity = 0;
    }
  });
});

video.addEventListener('ended', () => {
  link.style.display = 'block';
});

playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
  });