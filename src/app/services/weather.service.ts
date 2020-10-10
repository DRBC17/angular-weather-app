import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'fa690b02ddf2a17758c756cc0483cdb7';
  URI = '';

  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName, contryCode) {
    return this.http.get(`${this.URI}${cityName},${contryCode}`);
  }
}
