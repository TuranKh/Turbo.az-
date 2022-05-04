import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name = '';
  surname = '';

  constructor() { }

  ngOnInit(): void {
  }



  validation(inputData: any) {
    if(inputData) {
      return true
    }
    return false;
  }
}

