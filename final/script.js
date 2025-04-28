const video = document.getElementById('myVideo');
const link = document.getElementById('link');
const playButton = document.getElementById('playButton');

video.addEventListener('ended', () => {
  link.style.display = 'block';
});

playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
  });