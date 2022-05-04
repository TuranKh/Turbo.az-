import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./container/admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NewCarComponent} from "./components/reactive-form/new-car.component";
import {CarDataComponent} from "./components/reactive-form/car-data/car-data.component";
import {AdminService} from "./services/admin.service";
import {Router, RouterModule, Routes} from "@angular/router";
import { AddNewAnnouncementComponent } from './components/add-new-announcement/add-new-announcement.component';
import { ChangeAnnouncementComponent } from './components/change-announcement/change-announcement.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import {CarDetailsGuardService} from "./components/pageNotFound/car-details-guard.service";

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: 'list', component: AnnouncementListComponent},
      {path: 'insert', component: AddNewAnnouncementComponent},
      {path: 'update/:id', component: ChangeAnnouncementComponent, canActivate: [CarDetailsGuardService]},
      {path: 'user', loadChildren: () => import('./components/login/login.module').then(res => res.LoginModule)},
      {path: 'not-found', component: PageNotFoundComponent},
      {path: "**", redirectTo: 'user'}
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    NewCarComponent,
    CarDataComponent,
    AddNewAnnouncementComponent,
    ChangeAnnouncementComponent,
    AnnouncementListComponent,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  providers: [
    AdminService, CarDetailsGuardService
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
