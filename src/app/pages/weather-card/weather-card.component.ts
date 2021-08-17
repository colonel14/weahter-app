import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input('item') weatherItem: WeatherItem;
  constructor() {}

  ngOnInit(): void {}
}
