import { formatWeeklyDate, formatTime, formatCurrentDate } from "./utils";

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
    return `Date: ${formattedCurrentDate}, Temp: ${this.temp}, Location: ${this.location}, Condition: ${this.condition}, Temp Max: ${this.tempMax}, Temp Min: ${this.tempMin}, Humidity: ${this.humidity}, Feels Like: ${this.feelsLike}`;
  }

  weeklyToString() {
    const formattedDate = formatWeeklyDate(this.datetime);
    return `Date: ${formattedDate}, Temp: ${this.temp}, Condition: ${this.condition}`;
  }

  hourlyToString() {
    const formattedTime = formatTime(this.datetime);
    return `Time: ${formattedTime}, Condition: ${this.condition}, Temp: ${this.temp}`;
  }
}