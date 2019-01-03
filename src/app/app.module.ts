import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent, DialogOverviewExampleDialog } from './login/login.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  entryComponents:[DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
