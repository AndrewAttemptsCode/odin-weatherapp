import { formatWeeklyDate, formatTime, formatCurrentDate, tempFormat, setWeatherIcon } from './utils';
import maxIcon from '../images/control-icons/maxtemp.svg';
import minIcon from '../images/control-icons/mintemp.svg';
import feelsLikeIcon from '../images/control-icons/feelslike.svg';

export default class WeatherData {
  constructor(datetime, condition, icon, temp, tempMin, tempMax, humidity, feelsLike, location) {
    this.datetime = datetime;
    this.location = location;
    this.condition = condition;
    this.icon = icon;
    this.temp = temp;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.feelsLike = feelsLike;
  }

  displayCurrent() {
    const formattedCurrentDate = formatCurrentDate(this.datetime);
    const formattedTemp = tempFormat(this.temp);
    const formattedMinTemp = tempFormat(this.tempMin);
    const formattedMaxTemp = tempFormat(this.tempMax);
    const formattedFeelsLike = tempFormat(this.feelsLike);

    setWeatherIcon(this.icon);

    const currentSide = document.querySelector('.current-side');
    // Clear previous current weather display
    currentSide.innerHTML = '';
    // Location / Date container
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    // Location
    const currentLocation = document.createElement('p');
    currentLocation.classList.add('current-location');
    currentLocation.textContent = `${this.location}`;
    locationContainer.appendChild(currentLocation);
    currentSide.appendChild(locationContainer);
    // Date
    const currentDate = document.createElement('p');
    currentDate.classList.add('current-date');
    currentDate.textContent = `${formattedCurrentDate}`;
    locationContainer.appendChild(currentDate);
    // Temp
    const currentTemp = document.createElement('p');
    currentTemp.classList.add('current-temp');
    currentTemp.title = 'Current Temp';
    currentTemp.textContent = `${formattedTemp}`;
    currentSide.appendChild(currentTemp);
    // Condition
    const currentCondition = document.createElement('p');
    currentCondition.classList.add('current-condition');
    currentCondition.textContent = `${this.condition}`;
    currentSide.appendChild(currentCondition);
    // Min/Max Container
    const minMaxContainer = document.createElement('div');
    minMaxContainer.classList.add('min-max-container');
    currentSide.appendChild(minMaxContainer);
    // Temp Max Indicator
    const currentMaxIndicator = document.createElement('img');
    currentMaxIndicator.classList.add('current-max-indicator');
    currentMaxIndicator.title = 'Max Temp';
    currentMaxIndicator.src = maxIcon;
    minMaxContainer.appendChild(currentMaxIndicator);
    // Temp Max value
    const currentMax = document.createElement('p');
    currentMax.classList.add('current-max');
    currentMax.textContent = `${formattedMaxTemp}`;
    minMaxContainer.appendChild(currentMax);
    // Temp Min Indicator
    const currentMinIndicator = document.createElement('img');
    currentMinIndicator.classList.add('current-min-indicator');
    currentMinIndicator.title = 'Min Temp';
    currentMinIndicator.src = minIcon;
    minMaxContainer.appendChild(currentMinIndicator);
    // Temp Min value
    const currentMin = document.createElement('p');
    currentMin.classList.add('current-min');
    currentMin.textContent = `${formattedMinTemp}`;
    minMaxContainer.appendChild(currentMin);
    // Feels like container
    const feelsLikeContainer = document.createElement('div');
    feelsLikeContainer.classList.add('feels-like-container');
    currentSide.appendChild(feelsLikeContainer);
    // Feels Like Indicator
    const feelsLikeIndicator = document.createElement('img');
    feelsLikeIndicator.classList.add('feels-like-indicator');
    feelsLikeIndicator.title = 'Feels like';
    feelsLikeIndicator.src = feelsLikeIcon;
    feelsLikeContainer.appendChild(feelsLikeIndicator);
    // Feels Like value
    const currentFeelsLike = document.createElement('p');
    currentFeelsLike.classList.add('current-feels-like');
    currentFeelsLike.textContent = `${formattedFeelsLike}`;
    feelsLikeContainer.appendChild(currentFeelsLike);
  }

  // currentToString() {
  //   const formattedCurrentDate = formatCurrentDate(this.datetime);
  //   const formattedTemp = tempFormat(this.temp);
  //   const formattedMinTemp = tempFormat(this.tempMin);
  //   const formattedMaxTemp = tempFormat(this.tempMax);
  //   const formattedFeelsLike = tempFormat(this.feelsLike);
  //   return `Date: ${formattedCurrentDate}, Temp: ${formattedTemp}, Location: ${this.location}, Condition: ${this.condition}, Temp Max: ${formattedMaxTemp}, Temp Min: ${formattedMinTemp}, Humidity: ${this.humidity}, Feels Like: ${formattedFeelsLike}`;
  // }

  weeklyToString() {
    const formattedDate = formatWeeklyDate(this.datetime);
    const formattedTemp = tempFormat(this.temp);
    return `Date: ${formattedDate}, Temp: ${formattedTemp}, Condition: ${this.condition}`;
  }

  hourlyToString() {
    const formattedTime = formatTime(this.datetime);
    const formattedTemp = tempFormat(this.temp);
    return `Time: ${formattedTime}, Condition: ${this.condition}, Temp: ${formattedTemp}`;
  }
}
