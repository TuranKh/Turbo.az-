import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './container/example.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';



@NgModule({
  declarations: [
    ExampleComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }
