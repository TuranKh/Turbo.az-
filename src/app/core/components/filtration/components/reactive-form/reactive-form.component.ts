import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  @Output() sendFormData = new EventEmitter<any>();
  //emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  carFilter = this.fb.group({
    name: [null, [Validators.minLength(4), Validators.maxLength(100)]],
    model: [],
    priceMin: [null, [Validators.required, Validators.pattern("^[0-9]*$") ]],
    priceMax: [],
    yearMin: [],
    yearMax: []
  })

  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    // const data = {
    //   name: "BMW",
    //   priceMin: 12000,
    //   priceMax: 100000
    // };
    // this.carFilter.patchValue(data);
    // PUT // => PATCH
  }

  get priceMin() { return this.carFilter.get('priceMin') }

  getError() {
    console.log(this.priceMin?.errors);
  }

  showFilter(){
    this.sendFormData.emit(this.carFilter.value);
  }

}
