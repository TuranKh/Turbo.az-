import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltrationComponent} from "./container/filtration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    FiltrationComponent,

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
