import WeatherAPI from "./weatherAPI";
import WeatherData from "./weatherData";

export default class WeatherApp {
  constructor(apiKey, baseUrl) {
    this.weatherAPI = new WeatherAPI(apiKey, baseUrl);
  }

  async showCurrentWeather(location) {
    const weatherData = await this.weatherAPI.getCurrentWeather(location);
    const currentWeather = new WeatherData(
      weatherData.days[0].datetime,
      weatherData.days[0].conditions,
      weatherData.days[0].temp,
      weatherData.days[0].tempmin,
      weatherData.days[0].tempmax,
      weatherData.days[0].humidity,
      weatherData.days[0].feelslike,
      weatherData.resolvedAddress
    );
    console.log(currentWeather.currentToString());
  }

  async showWeeklyForecast(location) {
    const forecastData = await this.weatherAPI.getWeeklyForecast(location);
    forecastData.days.slice(1).forEach(day => {
      const dailyWeather = new WeatherData(
        day.datetime,
        day.conditions,
        day.temp
      );
      console.log(dailyWeather.weeklyToString());
    });
  }

  // showHourlyForecast next
}