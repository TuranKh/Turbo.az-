import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExampleModule } from './core/components/example/example.module';
import {FiltrationModule} from "./core/components/filtration/filtration.module";
import {AnnouncementsModule} from "./core/components/announcements/announcements.module";
import {SharedModule} from "./core/shared/shared.module";
import { CreateComponent } from './pages/create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './pages/create/components/reactive-form/reactive-form.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeService} from "./pages/home/services/home.service";
//import { AdminComponent } from './pages/admin/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FiltrationModule,
    ExampleModule,
    AnnouncementsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
