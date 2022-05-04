import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  /*
  * Guard, interceptor,
  *
  * Backend de routerlarin parcalanmasi.
  *
  * */

  /*
  * Table: users -> id, name, password
  *
  * Login (yoxlasin user var ya yoxdur)
  *
  * */

  @Output() newCarData = new EventEmitter<any>();

  newCarDetails = this.fb.group({
    name: ['', [Validators.required, Validators.min(4), Validators.max(12), Validators.pattern(/^\S+@\S+\.\S+$/)]],
    url: [],
    year: [],
    price: [],
    engine: [],
    mileage: []
  })

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  addNewCar(){
    this.newCarData.emit(this.newCarDetails.value);
  }
}
