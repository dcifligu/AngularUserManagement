import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
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
          this.router.navigate(['home']);
        },
        error: (err: any) => {
          console.error(err);
          this.router.navigate(['home']);
        },
      });
    }
  }

  returnHome(){
    this.router.navigate(['home']);
  }
}
