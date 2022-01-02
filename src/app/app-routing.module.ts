import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreateComponent} from "./pages/create/create.component";
import {AdminComponent} from "./pages/admin/admin.component";


const routes: Routes = [
  {path: "new-announce", component: CreateComponent},
  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminComponent},
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }