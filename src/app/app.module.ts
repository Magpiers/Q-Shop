import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatBadgeModule,
  MatTabsModule,
  MatDialogModule,
  MatListModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

// import { TooltipModule } from 'ngx-bootstrap';

// import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
// import { BsDatepickerModule } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AdminComponent } from './admin/admin.component';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewClientComponent } from './admin/add-new-client/add-new-client.component';
import { EditClientComponent } from './admin/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AddproductComponent,
    AddclientComponent,
    AdminComponent,
    AddNewClientComponent,
    EditClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatTabsModule,
    // MatDialogModule,
    // MatListModule,
    // MatStepperModule,
    // MatProgressSpinnerModule,
    // MatToolbarModule,
    BrowserAnimationsModule,
    SelectModule,
    MyDatePickerModule
    // BsDatepickerModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
