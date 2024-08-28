export default function loadTemplate() {
  const weatherApp = document.querySelector('.weather-app');

  const header = document.createElement('div');
  header.classList.add('header');
  weatherApp.appendChild(header);

  const currentSide = document.createElement('div');
  currentSide.classList.add('current-side');
  weatherApp.appendChild(currentSide);

  const main = document.createElement('div');
  main.classList.add('main');
  weatherApp.appendChild(main);
}
