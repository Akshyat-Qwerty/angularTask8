import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { RoleCrudComponent } from './role-crud/role-crud.component';
import { ItemCrudComponent } from './item-crud/item-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesSystemComponent } from './sales-system/sales-system.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCrudComponent,
    RoleCrudComponent,
    ItemCrudComponent,
    DashboardComponent,
    SalesSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
