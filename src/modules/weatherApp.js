import WeatherAPI from './weatherAPI';
import WeatherData from './weatherData';
import prevImage from '../images/control-icons/hourly-previous.svg';
import nextImage from '../images/control-icons/hourly-next.svg';
import { nextWeatherCard, prevWeatherCard } from './utils';

export default class WeatherApp {
  constructor(apiKey, baseUrl) {
    this.weatherAPI = new WeatherAPI(apiKey, baseUrl);
  }

  async showCurrentWeather(location) {
    const weatherData = await this.weatherAPI.getCurrentWeather(location);
    const currentWeather = new WeatherData(
      weatherData.days[0].datetime,
      weatherData.days[0].conditions,
      weatherData.days[0].icon,
      weatherData.days[0].temp,
      weatherData.days[0].tempmin,
      weatherData.days[0].tempmax,
      weatherData.days[0].humidity,
      weatherData.days[0].feelslike,
      weatherData.resolvedAddress
    );
    currentWeather.displayCurrent();
  }

  async showWeeklyForecast(location) {
    const weeklyForecastData = await this.weatherAPI.getWeeklyForecast(location);

    const mainContainer = document.querySelector('.main');

    const weeklyContainer = document.createElement('div');
    weeklyContainer.classList.add('weekly-container');
    mainContainer.appendChild(weeklyContainer);

    const weeklyTitle = document.createElement('h2');
    weeklyTitle.classList.add('weekly-title');
    weeklyTitle.textContent = 'Weekly Forecast';
    weeklyContainer.appendChild(weeklyTitle);

    const weeklyCardContainer = document.createElement('div');
    weeklyCardContainer.classList.add('weekly-card-container');
    weeklyContainer.appendChild(weeklyCardContainer);

    weeklyForecastData.days.slice(1).forEach((day) => {
      const weeklyWeather = new WeatherData(
        day.datetime,
        day.conditions,
        day.icon,
        day.temp
      );
      weeklyWeather.displayWeekly();
    });
  }

  async showHourlyForecast(location) {
    const hourlyForecastData = await this.weatherAPI.getHourlyForecast(location);

    const mainContainer = document.querySelector('.main');
    const hourlyContainer = document.createElement('div');
    hourlyContainer.classList.add('hourly-container');
    mainContainer.appendChild(hourlyContainer);

    const hourlyTitle = document.createElement('h2');
    hourlyTitle.classList.add('hourly-title');
    hourlyTitle.textContent = 'Hourly Forecast';
    hourlyContainer.appendChild(hourlyTitle);

    const hourlyPrev = document.createElement('button');
    hourlyPrev.classList.add('hourly-prev');
    hourlyContainer.appendChild(hourlyPrev);
    hourlyPrev.addEventListener('click', prevWeatherCard);

    const hourlyNext = document.createElement('button');
    hourlyNext.classList.add('hourly-next');
    hourlyContainer.appendChild(hourlyNext);
    hourlyNext.addEventListener('click', nextWeatherCard);

    const hourlyPrevImage = document.createElement('img');
    hourlyPrevImage.src = prevImage;
    hourlyPrev.appendChild(hourlyPrevImage);

    const hourlyNextImage = document.createElement('img');
    hourlyNextImage.src = nextImage;
    hourlyNext.appendChild(hourlyNextImage);

    let hourlyCardContainer = document.querySelector('.hourly-card-container');
    if (!hourlyCardContainer) {
      hourlyCardContainer = document.createElement('div');
      hourlyCardContainer.classList.add('hourly-card-container');
      hourlyContainer.appendChild(hourlyCardContainer);
    }

    hourlyCardContainer.innerHTML = '';

    hourlyForecastData.days[0].hours.forEach((hour) => {
      const hourlyWeather = new WeatherData(
        hour.datetime,
        hour.conditions,
        hour.icon,
        hour.temp
      );
      hourlyWeather.displayHourly();
    });
  }
}
