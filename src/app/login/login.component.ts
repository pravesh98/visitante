import { Component, OnInit,Inject } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

//import { userInfo } from 'os';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  animal: string;
  name: string;

  loggedIn : boolean = false;

  loginForm=new FormGroup({
    userName:new FormControl(''),
    userPassword:new FormControl('')
  });

  registerForm=new FormGroup({
    userName:new FormControl(''),
    userPassword:new FormControl(''),
    confirmUserPassword:new FormControl('')
  });

  signInForm:boolean=true;
  signUpForm:boolean=false;

  constructor(public dialog:MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onSubmitLoginForm(){
    console.log("im in loging component")
    console.log(this.loginForm.value.userName);
  }

  onSubmitSignUpForm(){
    console.log("im in loging component")
    console.log(this.registerForm.value.userName);
  }

  displayForm(num){
    if(num==0){
      this.signInForm=true;
      this.signUpForm=false;
    }
    if(num==1)
    {      
      this.signInForm=false;
      this.signUpForm=true;
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
