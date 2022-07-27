import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
title: string;
director: string;
releasedYear: number;
runTime: string;
moviePoster: string;
isLoader = false
  constructor(public httpSer: HttpService) { }

  ngOnInit(): void {
  }
  getMovieInfo(movieName: any){
    this.httpSer.getMovieDetails(movieName).subscribe({
      next:(data:any)=>{
        this.title= data.Title;
        this.director=data.Director;
        this.releasedYear= data.Released;
        this.runTime=data.Runtime
        this.moviePoster=data.Poster;
       
        console.log(data)
        console.log(data.Released);
        this.isLoader = true;
        }, error: (error: string)=>{
          console.log(error)
        }
        })
  }}
      
  
