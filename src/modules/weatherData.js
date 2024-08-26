export default class WeatherData {
  constructor(location, condition, temp, tempMin, tempMax, humidity, feelsLike) {
    this.location = location;
    this.condition = condition;
    this.temp = temp;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.feelsLike = feelsLike;
  }

  toString() {
    return `Temp: ${this.temp}, Location: ${this.location}, Condition: ${this.condition}, Temp Max: ${this.tempMax}, Temp Min: ${this.tempMin}, Humidity: ${this.humidity}, Feels Like: ${this.feelsLike}`;
  }
}