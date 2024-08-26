export default class WeatherAPI {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async getCurrentWeather(location) {
    const response = await fetch(`${this.baseUrl}${location}?key=${this.apiKey}`);
    const currentWeather = await response.json();
    return currentWeather;
  }
}

// baseUrl: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/