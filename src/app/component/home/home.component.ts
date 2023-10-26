import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'actions'];
  displayeUser: string[] = ['id', 'firstName', 'lastName', 'actions', 'phone', 'email'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _dialog: MatDialog, private _userService: UserService, private _coreService: CoreService, private router: Router){}

  ngOnInit() {
  this.getUserList();
  }

  getUserList(){
      this._userService.getUserList().subscribe({
        next: (res) =>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (err) =>{
          console.log(err)
        }
      })

    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUserEditForm(){
          this.router.navigate(['addUser']);
  }

detailUser(id: number, firstName: string, lastName: string, phone: string, email: string) {
  this.router.navigate(['details', id]); // Navigate to the details route with the user's ID
}

  deleteUser(id: number) {
  // Open the confirmation dialog
  const dialogRef = this._dialog.open(DeleteConfirmationComponent, {
  });
  dialogRef.afterClosed().subscribe((result: boolean) => {
    if (result) {
      // User confirmed deletion, proceed with deletion
      this._userService.deleteUser(id).subscribe({
        next: (res) => {
          this._coreService.openSnackBar('User deleted successfully', 'done');
          this.getUserList();
        },
        error: console.log,
      });
    }
    // Otherwise, the user canceled the deletion
  });
}


}
