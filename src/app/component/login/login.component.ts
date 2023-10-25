import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit{

  isLoggedIn = false;

  constructor(public _dialog: MatDialog,private router: Router){}

  ngOnInit(): void {
      this.openLogin();
  }

  openLogin(){
    const dialogRef = this._dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.isLoggedIn = true;
          this.router.navigate(['home']);
      }
    });
  }
}



