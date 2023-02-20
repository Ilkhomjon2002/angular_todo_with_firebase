import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchWeatherService } from 'src/app/services/fetchWeather/fetch-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weatherSearchForm!:FormGroup;
  weatherData!:any
  constructor(private formBuilder:FormBuilder,private fw:FetchWeatherService){
    this.weatherSearchForm=this.formBuilder.group({
      location:
        [""]
    })


  }

  sendRequest(formValues:{location:string}){
    this.fw.sendRequest(formValues.location).subscribe(val=>{
      this.weatherData=val
      console.log(val)
    })
    
  }


}
