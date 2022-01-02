import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from "./container/announcements.component";


@NgModule({
  declarations: [
    AnnouncementsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AnnouncementsComponent]
})
export class AnnouncementsModule { }
