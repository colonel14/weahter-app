import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WEATHER_ITEMS } from '../weather.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherItems: WeatherItem[];

  constructor() {}

  ngOnInit(): any {
    this.weatherItems = WEATHER_ITEMS;
  }
}
