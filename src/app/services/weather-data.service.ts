import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  weatherData:any = null;
  constructor(private http: HttpClient) { }

  getWeatherData(city: string):Observable<any>{
    return this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&key=0f18907a2d2d49b6aee142403231405`);

  }
}
