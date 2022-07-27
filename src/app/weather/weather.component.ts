import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
City:string;
country:string;
temperature:number;
humidity:string;
message : string;
  constructor(public httpSer: HttpService, public http: HttpClient) { }

  ngOnInit(): void {}
isCityAvai= false
statusMessage:string;
  getWeatherDetails(city:string){
    this.httpSer.getWeather(city).subscribe({
      next:(data:any)=>{
        this.City= data.name;
        this.country=data.sys.country;
        this.temperature=(data.main.temp) -273 ;
        this.humidity=data.main.humidity;
        console.log(data);
        console.log(this.City)
        console.log(this.country);
        console.log(this.temperature);
        console.log(this.humidity);
   this.isCityAvai= true
        console.log( data.name)
      },error:(error:any)=>{
        console.log(error)
        if(error.status===404 ){
          console.log("hello")
         this.isCityAvai= false;
         this.statusMessage= 'city not found'} 
                  return this.isCityAvai
      
        // this.message= error.statustext
      }
    })
  }
  
}
  
     
  

 

