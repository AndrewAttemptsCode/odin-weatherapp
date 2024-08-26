import WeatherApp from "./modules/weatherApp";

const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey = "BEZ29GZQSBH53VG9GZQWMSF5H";

const weatherApp = new WeatherApp(apiKey, baseUrl);

weatherApp.showCurrentWeather("manchester");
weatherApp.showWeeklyForecast("manchester");
