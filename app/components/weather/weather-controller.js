import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

  constructor() {
    //this will fire off get weather right away
    this.getWeather()
  }
  getWeather() {
    weatherService.getWeather(weather => {
      console.log(weather);
      //What can you do with this weather object?
      let template = `
      <h2>${weather}</h2>
      `
      document.getElementById("weather").innerHTML = template
    })
  }
}