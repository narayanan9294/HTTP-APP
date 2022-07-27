import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
movieName :string = "Roja"
  constructor( public http: HttpClient ) { }

  getWeather(city:string){
    return this.http.get<any[]>("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3a3eb62e70b9745f96cb7c04245a9cb8")
  }

  getNews(){
    return this.http.get<any[]>("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b")
  }
  getNewsCategory(value:any){
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&category="+value+"&apiKey=408b4153b994422d8638da72f2d3ac5b")
  }

  getJokes(){
    return this.http.get<any[]>("https://api.icndb.com/jokes/random")
  }
  getMovieDetails(movieName:any){
 return this.http.get<any>("https://omdbapi.com/?t="+movieName+"&apikey=c429066e")
  }

  getLoginAccounts(){
    return this.http.get<any[]>("assets/data.json")
  }
  
  isLoggedIn(){
   return  !!localStorage.getItem("loggedUser")
  }
  logOut(){
    localStorage.clear()
  }
  
  loginUserName(){
    return localStorage.getItem('loggedUser')
  }



  
}
