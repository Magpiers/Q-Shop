import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewClientComponent } from './admin/add-new-client/add-new-client.component';
import { EditClientComponent } from './admin/edit-client/edit-client.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'addClient', component: AddclientComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addNewClient', component: AddNewClientComponent },
  { path: 'editClient', component: EditClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
