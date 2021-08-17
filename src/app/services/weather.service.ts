import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherItem } from '../pages/weather-item';
import { WEATHER_ITEMS } from '../pages/weather.data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '2d1cee6a4b726aa0ce6ce5576010b3b1';

  constructor(private _http: HttpClient) {}

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }
  getCity(cityName: string): Observable<any> {
    return this._http
      .get(`${this.baseUrl}${cityName}&units=metric&appid=${this.apiKey}`)
      .pipe(map((res) => res));
  }
}
