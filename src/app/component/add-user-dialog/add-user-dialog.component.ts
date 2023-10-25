import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent {

  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<AddUserDialogComponent>,
    private _dialog: MatDialog,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.userForm = _fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  onFormSubmit() {
    if (this.userForm.valid) {
      // Create a new User
      this._userService.addUser(this.userForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('User created successfully', 'done');
          this._dialogRef.close(true);
          this.router.navigate(['home']);
        },
        error: (err: any) => {
          console.error(err);
          this._dialogRef.close(true);
          this.router.navigate(['home']);
        },
      });
    }
  }

  returnHome(){
    this._dialogRef.close(true);
    this.router.navigate(['home']);
  }
}
