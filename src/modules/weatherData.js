import { formatWeeklyDate, formatTime, formatCurrentDate, tempFormat, setWeatherIcon } from './utils';

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
    // Temp Max
    const currentMax = document.createElement('p');
    currentMax.classList.add('current-Max');
    currentMax.textContent = `Max: ${formattedMaxTemp}`;
    minMaxContainer.appendChild(currentMax);
    // Temp Min
    const currentMin = document.createElement('p');
    currentMin.classList.add('current-min');
    currentMin.textContent = `Min: ${formattedMinTemp}`;
    minMaxContainer.appendChild(currentMin);
    // Feels Like
    const currentFeelsLike = document.createElement('p');
    currentFeelsLike.classList.add('current-feels-like');
    currentFeelsLike.textContent = `Feels Like: ${formattedFeelsLike}`;
    currentSide.appendChild(currentFeelsLike);
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
