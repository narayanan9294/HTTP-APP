import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public httpSer: HttpService) { }
title: any[];
i : number;
  ngOnInit(): void {
    this.httpSer.getNews().subscribe({
      next:(data: any)=> {
        console.log(data)
        this.title= data.articles
        console.log( this.title)
      }, error: (error: string)=>{
        console.log(error)
      }
    })
  }
  getNewsWithCategory(value:any ){
    console.log('value');
    this.httpSer.getNewsCategory(value ).subscribe(
      {
        next:(data: any)=> {
          console.log(data)
          this.title= data.articles
          console.log( this.title)
        }, error: (error: string)=>{
          console.log(error)
        }
      } 
    )
  }
}
