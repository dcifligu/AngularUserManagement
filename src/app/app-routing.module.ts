import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DetailsComponent } from './component/details/details.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent, canActivate: [AuthGuard] },
  {path: 'home', component:HomeComponent},
  {path: 'addUser', component:AddUserComponent},
  { path: 'details/:id', component: DetailsComponent },
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
