import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visitante';

  canLogin: boolean = false;

callingComponent(callingCpt){
  this.canLogin = callingCpt;
}
}
