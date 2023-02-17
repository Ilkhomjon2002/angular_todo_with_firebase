import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY="4847d19aa40f72f0fd567345375027a4";
@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {

  constructor(private http:HttpClient) { }

  sendRequest(location:string){
   return this.http.get(`http://api.weatherstack.com/v1/current?access_key=${API_KEY}&query=${location}`)
  }
}
