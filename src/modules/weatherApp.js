import WeatherAPI from './weatherAPI';
import WeatherData from './weatherData';

export default class WeatherApp {
  constructor(apiKey, baseUrl) {
    this.weatherAPI = new WeatherAPI(apiKey, baseUrl);
  }

  async showCurrentWeather(location) {
    const weatherData = await this.weatherAPI.getCurrentWeather(location);
    const currentWeather = new WeatherData(
      weatherData.days[0].datetime,
      weatherData.days[0].conditions,
      weatherData.days[0].icon,
      weatherData.days[0].temp,
      weatherData.days[0].tempmin,
      weatherData.days[0].tempmax,
      weatherData.days[0].humidity,
      weatherData.days[0].feelslike,
      weatherData.resolvedAddress
    );
    // console.log(currentWeather.currentToString());
    currentWeather.displayCurrent();
  }

  async showWeeklyForecast(location) {
    const weeklyForecastData = await this.weatherAPI.getWeeklyForecast(location);
    weeklyForecastData.days.slice(1).forEach((day) => {
      const dailyWeather = new WeatherData(
        day.datetime,
        day.conditions,
        day.temp
      );
      console.log(dailyWeather.weeklyToString());
    });
  }

  async showHourlyForecast(location) {
    const hourlyForecastData = await this.weatherAPI.getHourlyForecast(location);
    hourlyForecastData.days[0].hours.forEach((hour) => {
      const hourlyWeather = new WeatherData(
        hour.datetime,
        hour.conditions,
        hour.temp
      );
      console.log(hourlyWeather.hourlyToString());
    });
  }
}
