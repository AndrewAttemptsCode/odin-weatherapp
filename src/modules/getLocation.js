import searchImg from '../images/control-icons/search.svg';

export default function getLocation(weatherApp) {
  const header = document.querySelector('.header');

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  header.appendChild(searchContainer);

  const searchForm = document.createElement('form');
  searchForm.classList.add('search-form');
  searchContainer.appendChild(searchForm);

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'location';
  searchInput.classList.add('search-input');
  searchInput.autocomplete = 'off';
  searchInput.placeholder = 'Search Location';
  searchForm.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.title = 'Search location';
  searchButton.classList.add('search-button');
  searchForm.appendChild(searchButton);

  const searchImage = document.createElement('img');
  searchImage.src = searchImg;
  searchButton.appendChild(searchImage);

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let location = searchInput.value.trim();

    if (location === '') {
      location = 'manchester';
    }

    await weatherApp.showCurrentWeather(location);
    await weatherApp.showWeeklyForecast(location);
    await weatherApp.showHourlyForecast(location);
    searchInput.value = '';
  });
}
