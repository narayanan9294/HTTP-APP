import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // isLoggedIn : boolean = false
  registeredUsers : any[];
  constructor(public httpSer: HttpService, public myRouter: Router) { }

  ngOnInit(): void {

      this.httpSer.getLoginAccounts().subscribe({
        next: (data: any[])=>{
          this.registeredUsers = data;
          // for(let i = 0; i<this.registeredUsers.length, i++){
  
          // }
          console.log(data)
        }, error: (error: string)=>{
          console.log(error)
        }
      })
    
  
  }


 
  doSubmit(form: NgForm){
    console.log(form);
this.registeredUsers.forEach((element,index,array) => {
  // console.log(element.username);
  // console.log(index)
  // console.log(array)

  if(element.username== form.value.Uname &&  element.password == form.value.Upassword){
    localStorage.setItem("loggedUser",form.value.Uname);
    // this.isLoggedIn= true;
    this.httpSer.loginUserName();
    this.myRouter.navigateByUrl('weather');
    
  }
  // else{
  //   this.isLoggedIn = false;
  // }
// console.log(form.value.Uname)
});

// console.log(this.registeredUsers)
 }

 

}
