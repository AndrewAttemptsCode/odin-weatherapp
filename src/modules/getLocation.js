import searchImg from '../images/control-icons/search.svg';

export default function getLocation() {
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
  searchInput.placeholder = 'Search Location';
  searchForm.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.classList.add('search-button');
  searchForm.appendChild(searchButton);

  const searchImage = document.createElement('img');
  searchImage.src = searchImg;
  searchButton.appendChild(searchImage);
}