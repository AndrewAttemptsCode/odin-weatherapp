import clearDayIcon from '../images/weather-icons/clear-day.svg';
import rainIcon from '../images/weather-icons/rain.svg';
import clearNightIcon from '../images/weather-icons/clear-night.svg';
import cloudyIcon from '../images/weather-icons/cloudy.svg';
import partyCloudyDayIcon from '../images/weather-icons/partly-cloudy-day.svg';
import partlyCloudyNightIcon from '../images/weather-icons/partly-cloudy-night.svg';
import rainSnowShowersNightIcon from '../images/weather-icons/rain-snow-showers-night.svg';
import showersDayIcon from '../images/weather-icons/showers-day.svg';
import showersNightIcon from '../images/weather-icons/showers-night.svg';
import snowShowersDayIcon from '../images/weather-icons/snow-showers-day.svg';
import snowShowersNightIcon from '../images/weather-icons/snow-showers-night.svg';
import thunderIcon from '../images/weather-icons/thunder.svg';
import thunderShowersNightIcon from '../images/weather-icons/thunder-showers-night.svg';
import windIcon from '../images/weather-icons/wind.svg';
import fogIcon from '../images/weather-icons/fog.svg';
import hailIcon from '../images/weather-icons/hail.svg';
import rainSnowIcon from '../images/weather-icons/rain-snow.svg';
import rainSnowShowersIcon from '../images/weather-icons/rain-snow-showers-day.svg';
import sleetIcon from '../images/weather-icons/sleet.svg';
import snowIcon from '../images/weather-icons/snow.svg';
import thunderRainIcon from '../images/weather-icons/thunder-rain.svg';
import thunderShowersDayIcon from '../images/weather-icons/thunder-showers-day.svg';

export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hoursNumber = Number(hours);
  const period = hoursNumber >= 12 ? 'PM' : 'AM';
  const hoursConverted = hoursNumber % 12 || 12;
  const hoursFormatted = hoursConverted < 10 ? `0${hoursConverted}` : hoursConverted;
  return `${hoursFormatted}:${minutes} ${period}`;
}

export function formatWeeklyDate(dateString) {
  const [, month, date] = dateString.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = Number(month) - 1;
  return `${date} ${months[monthIndex]}`;
}

export function formatCurrentDate(dateString) {
  const [year, month, date] = dateString.split('-');

  const newDate = new Date(`${year}-${month}-${date}`);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const targetDay = days[newDate.getDay()];
  const targetMonth = months[newDate.getMonth()];

  return `${targetDay}, ${date} ${targetMonth}`;
}

export function tempFormat(tempValue) {
  const tempNumber = Number(tempValue);
  const tempC = ((tempNumber - 32) * 5) / 9;
  const tempFormatted = tempC.toFixed(0);
  return `${tempFormatted}°C`;
}

const weatherIconSet = {
  'clear-day': clearDayIcon,
  'rain': rainIcon,
  'clear-night': clearNightIcon,
  'cloudy': cloudyIcon,
  'partly-cloudy-day': partyCloudyDayIcon,
  'rain-snow-showers-night': rainSnowShowersNightIcon,
  'snow-showers-day': snowShowersDayIcon,
  'showers-day': showersDayIcon,
  'snow-showers-night': snowShowersNightIcon,
  'wind': windIcon,
  'showers-night': showersNightIcon,
  'thunder': thunderIcon,
  'fog': fogIcon,
  'rain-snow': rainSnowIcon,
  'sleet': sleetIcon,
  'thunder-rain': thunderRainIcon,
  'hail': hailIcon,
  'rain-snow-showers-day': rainSnowShowersIcon,
  'snow': snowIcon,
  'thunder-showers-day': thunderShowersDayIcon,
  'thunder-showers-night': thunderShowersNightIcon,
  'partly-cloudy-night': partlyCloudyNightIcon,
};

export function setWeatherIcon(icon) {
  const mainContainer = document.querySelector('.main');
  mainContainer.innerHTML = ''; // temp fix until main dom is done
  const currentWeatherIcon = document.createElement('img');
  currentWeatherIcon.classList.add('current-weather-icon');
  currentWeatherIcon.src = weatherIconSet[icon];
  mainContainer.appendChild(currentWeatherIcon);
}
