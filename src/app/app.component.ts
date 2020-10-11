import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}

  getWeather(cityName: string, CountryCode: string) {
    this.weatherService.getWeather(cityName, CountryCode).subscribe(
      (res) => {
        this.weather = res;
        // console.log(this.weather);
      },
      (err) => console.error(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, CountryCode: HTMLInputElement) {
    if (cityName.value && CountryCode.value) {
      this.getWeather(cityName.value, CountryCode.value);
      cityName.value = '';
      CountryCode.value = '';
    } else {
      alert('Please, Insert some values');
    }
    cityName.focus();
    return false;
  }
}
