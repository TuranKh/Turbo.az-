import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {

  @Output() sendFormData = new EventEmitter<any>();

  constructor() { }


  ngOnInit(): void {

  }

  acceptedFilterFormData(formData: any) {
    this.sendFormData.emit(formData);
  }

}
