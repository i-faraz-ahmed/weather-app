import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent {
  constructor(private weatherService: WeatherDataService){}
  cityInput = new FormControl();
  onInputKeyUp(e:Event): void {
   this.weatherService.getWeatherData(this.cityInput.value).subscribe((res)=> {
    this.weatherService.weatherData = res;
    console.log('res', res);
    
    if(res){
      res.forecast.forecastday.map((el: any)=> {
        el.dayName = new Date(el.date).getDay();
      })
    }
   })
  }
}
