import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  cities = ['Egypt', 'London', 'Japan', 'Paris', 'Rome'];

  toggleActive() {
    let citySearchMenu = document.querySelector('.city__search-menu');
    citySearchMenu?.classList.toggle('active');
  }

  constructor(private _weatherService: WeatherService) {}

  onSubmit(city: string) {
    this._weatherService.getCity(city).subscribe((data) => {
      const weatherItem = new WeatherItem(
        data.name,
        data.main.temp,
        data.weather[0].main,
        data.main.temp_min,
        data.main.temp_max
      );
      this._weatherService.addWeatherItem(weatherItem);
    });
  }
  ngOnInit() {}
}
