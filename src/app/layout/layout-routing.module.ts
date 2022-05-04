import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../pages/home/home.component";
import {CreateComponent} from "../pages/create/create.component";
import {LayoutComponent} from "./container/layout.component";


const routes: Routes = [
  {path : '', component: LayoutComponent,  children: [
      {path: "home", component: HomeComponent},
      {path: "new-announce", component: CreateComponent},
      {path: '**', redirectTo: '/home' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
