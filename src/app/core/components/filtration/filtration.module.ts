import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltrationComponent} from "./container/filtration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SomeComponent } from './components/some/some.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    FiltrationComponent,
    SomeComponent,
    ReactiveFormComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    FiltrationComponent
  ]
})
export class FiltrationModule { }
