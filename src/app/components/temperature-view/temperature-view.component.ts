import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-temperature-view',
  templateUrl: './temperature-view.component.html',
  styleUrls: ['./temperature-view.component.scss']
})
export class TemperatureViewComponent {
  constructor(public weatherService: WeatherDataService){}
}
