function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function placePinkDot() {
  const pinkdot = document.getElementById('pinkdot');
  const margin = 40;
  const x = getRandomInt(margin, window.innerWidth - margin);
  const y = getRandomInt(margin, window.innerHeight - margin);
  pinkdot.style.left = `${x}px`;
  pinkdot.style.top = `${y}px`;
}

document.addEventListener('DOMContentLoaded', event => {
  placePinkDot();
});
