export default class WeatherAPI {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async getCurrentWeather(location) {
    const response = await fetch(`${this.baseUrl}${location}/today?key=${this.apiKey}`);
    const currentWeather = await response.json();
    return currentWeather;
  }

  async getWeeklyForecast(location) {
    const response = await fetch(`${this.baseUrl}${location}/next7days?key=${this.apiKey}`);
    const weeklyForecast = await response.json();
    return weeklyForecast;
  }

  async getHourlyForecast(location) {
    const response = await fetch(`${this.baseUrl}${location}/today?key=${this.apiKey}`);
    const hourlyForecast = await response.json();
    return hourlyForecast;
  }
}

// baseUrl: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/