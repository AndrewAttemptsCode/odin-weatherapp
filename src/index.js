import './style.css';
import WeatherApp from './modules/weatherApp';
import loadTemplate from './template';

const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const apiKey = 'BEZ29GZQSBH53VG9GZQWMSF5H';

const weatherApp = new WeatherApp(apiKey, baseUrl);

loadTemplate();

document.addEventListener('DOMContentLoaded', async () => {
  const location = 'manchester';
  await weatherApp.showCurrentWeather(location);
  await weatherApp.showWeeklyForecast(location);
  await weatherApp.showHourlyForecast(location);
});
