import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
username: string = '';
password: string = '';
error: string = '';


 constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close(false); // User canceled login
  }

  onLoginClick(): void {
    // Check the entered username and password
    if (this.username === 'admin' && this.password === 'admin') {
      this.dialogRef.close(true);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
