import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { StylingIndex } from '@angular/core/src/render3/styling';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  canLogin: boolean = false;

  @Output() changeValue  = new EventEmitter<boolean>();
  
  // @Input() Login: LoginComponent;

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {
    console.log(event.value);
  }
  
  login() {
    console.log("Login successful");
    this.canLogin = !this.canLogin;
    this.changeValue.emit(this.canLogin);
  }

}
