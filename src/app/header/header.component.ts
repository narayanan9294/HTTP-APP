import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
msg: string ;
  constructor( public httpSer : HttpService) { }

  ngOnInit(): void {

 
    
  
  }

doLogOut(){
  console.log(this.httpSer.loginUserName())
  this.httpSer.logOut()
 
}




}
