import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {tryCatch} from "rxjs/internal-compatibility";


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit, OnChanges, OnDestroy {

  // type should be same as in parent element
  // input from parent to child
  // output from child to parent

  @Input() data: any[] = [];
  @Input() title = '';


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data.currentValue.length) {
      console.log(changes.data.currentValue);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Component silindi');
  }

}
