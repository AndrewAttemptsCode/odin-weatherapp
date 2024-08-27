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
    return `Date: ${this.datetime}, Temp: ${this.temp}, Location: ${this.location}, Condition: ${this.condition}, Temp Max: ${this.tempMax}, Temp Min: ${this.tempMin}, Humidity: ${this.humidity}, Feels Like: ${this.feelsLike}`;
  }

  weeklyToString() {
    return `Date: ${this.datetime}, Temp: ${this.temp}, Condition: ${this.condition}`;
  }

  hourlyToString() {
    return `Date: ${this.datetime}, Condition: ${this.condition}, Temp: ${this.temp}`;
  }
}