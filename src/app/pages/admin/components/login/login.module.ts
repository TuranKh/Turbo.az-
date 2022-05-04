import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {NewCarComponent} from "../reactive-form/new-car.component";
import {UserdataComponent} from "../reactive-form/userdata/userdata.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NewUserDataComponent} from "../reactive-form/userdata/new-user/new-user-data.component";


const routes: Routes = [
  {path: '', component: LoginComponent, children: [
      {path: 'signup', component: NewUserDataComponent},
      {path: 'login', component: UserdataComponent},
      {path: '**', redirectTo: "login"}
    ]}
];

@NgModule({
  declarations: [LoginComponent, NewUserDataComponent, UserdataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
