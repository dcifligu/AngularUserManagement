import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onLoginClick() {
    // Replace this with your logic to check if the credentials are correct.
    if (this.username === 'admin' && this.password === 'admin') {
      // Credentials are correct, navigate to the home page.
      this.router.navigate(['/home']);
    } else {
      // Credentials are incorrect, show a Snackbar error message.
      this.showErrorSnackbar('Invalid username or password');
    }
  }

  // Function to display a Snackbar with an error message
  private showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      verticalPosition: 'top'
    });
  }
}




