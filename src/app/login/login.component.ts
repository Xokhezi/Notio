import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  invalidLogin:any; 
  constructor() { }

  signIn(credentials: any) {
    console.log(credentials);
  
    
  }

}
