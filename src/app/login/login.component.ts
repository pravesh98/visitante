import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
//import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn : boolean = false;

  myform: FormGroup;
  user: FormControl;
  pass: FormControl;


  constructor() { }

  ngOnInit() {
  }

  // submit(name, password){
  //   console.log("tested")
  //   console.log(name);
  //   console.log(password);
  //   this.loggedIn=!this.loggedIn;
  // }

  // onKeydown(event) {
  //   console.log(event.value);
  // } 

  // onSubmit(user) {
  //   console.log(user);

  //   // var body = "&password=" + user.password + "&name=" + user.name;
  //   // this.http.post("https://localhost:4200", body).subscribe((data) => {});

  // }
  onSubmitLoginForm(){
    console.log("im in loging component")
    this.user= name;
  }
}
