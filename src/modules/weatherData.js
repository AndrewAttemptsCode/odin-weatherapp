import { formatWeeklyDate, formatTime, formatCurrentDate, tempFormat } from './utils';

export default class WeatherData {
  constructor(datetime, condition, temp, tempMin, tempMax, humidity, feelsLike, location) {
    this.datetime = datetime;
    this.location = location;
    this.condition = condition;
    this.temp = temp;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.feelsLike = feelsLike;
  }

  currentToString() {
    const formattedCurrentDate = formatCurrentDate(this.datetime);
    const formattedTemp = tempFormat(this.temp);
    const formattedMinTemp = tempFormat(this.tempMin);
    const formattedMaxTemp = tempFormat(this.tempMax);
    const formattedFeelsLike = tempFormat(this.feelsLike);
    return `Date: ${formattedCurrentDate}, Temp: ${formattedTemp}, Location: ${this.location}, Condition: ${this.condition}, Temp Max: ${formattedMaxTemp}, Temp Min: ${formattedMinTemp}, Humidity: ${this.humidity}, Feels Like: ${formattedFeelsLike}`;
  }

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
