import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
 userForm: FormGroup;
 userId!: number;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _coreService: CoreService,
    private userService: UserService
  ) {
    this.userForm = _fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

    ngOnInit() {
    // Get the user ID from the route parameter
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      // Fetch user data based on the user ID
      this.userService.getUserById(this.userId).subscribe((user) => {
        // Set the form fields with the user data
        this.userForm.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
        });
      });
    });
  }

  onFormSubmit() {
  if (this.userForm.valid) {
    // Update user data
    this._userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('User updated successfully', 'done');
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

