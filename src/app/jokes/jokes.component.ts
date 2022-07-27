import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
randomJokes: any;
  constructor(public httpSer: HttpService) { }

  ngOnInit(): void {
    this.httpSer.getJokes().subscribe({
      next:(data:any)=>{
        console.log(data)
  this.randomJokes = data.value.joke
      },error:(error:string)=>{
        console.log(error)
      }
    })
   
  
  }

 sayRandomJokes(){
  this.httpSer.getJokes().subscribe({
    next:(data:any)=>{
      console.log(data)
this.randomJokes = data.value.joke
    },error:(error:string)=>{
      console.log(error)
    }
  })
 }
 
}
