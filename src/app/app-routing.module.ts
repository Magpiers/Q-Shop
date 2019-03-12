import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddclientComponent } from './addclient/addclient.component';
const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
  { path: '', component: AddproductComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'addClient', component: AddclientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
