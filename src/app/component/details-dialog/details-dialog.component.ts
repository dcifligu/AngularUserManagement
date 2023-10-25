import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css'],
})
export class DetailsDialogComponent {
  userForm: FormGroup;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<DetailsDialogComponent>,
    private _dialog: MatDialog,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.userForm = this._fb.group({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
  }

  ngOnInit() {
    // Get the user details from the query parameters
    this.route.queryParams.subscribe((queryParams) => {
      this.userForm.setValue({
        firstName: queryParams['firstName'],
        lastName: queryParams['lastName'],
        phone: queryParams['phone'],
        email: queryParams['email'],
      });
    });
  }

  onFormSubmit() {
  if (this.userForm.valid && this.data) {
    const userData = this.userForm.value;
    // Make a PUT request to update the user's data
    this._userService.updateUser(this.data.id, userData).subscribe({
      next: (response: any) => {
        this._coreService.openSnackBar('User updated successfully', 'done');
        this._dialogRef.close(true);
        // You can optionally redirect the user after updating
        this.router.navigate(['home']);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}

  onCancelClick() {
    this._dialogRef.close(false); // Close the dialog without updating
    this.router.navigate(['home']); // Redirect to /home on Cancel
  }
}
