import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AdminService} from "../../../services/admin.service";
import {CommonModule} from "@angular/common";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {
  data:any[] = [];
  editableItemIndex = -1;
  condition: boolean = true;
  active: boolean = true;

  // carDetails=this.fb.group({
  //   id: [],
  //   name: [],
  //   url: [],
  //   year: [],
  //   price: [],
  //   engine: [],
  //   mileage: []
  // })


  carDetails = this.fb.array ([
  ]);

  ifNewCar() {
    const keys = Object.keys(this.data[0]);
    for(let element in this.data) {
      let newEl = this.fb.group({
      });
      for(let key in keys) {
        newEl.addControl(keys[key], this.fb.control((this.data[element])[keys[key]]))
      }
      this.carDetails.push(newEl)
    }
    console.log(this.carDetails.value)
    // for(let any of this.carDetails.controls) {
    //   console.log(any, " This is any")
    // }

  }



  constructor(private fb: FormBuilder, private http: HttpClient, private adminService:AdminService ){ }


  ngOnInit(): void {
    this.carFromDatabase()
    this.ifNewCar()
  }


  carFromDatabase(formdata = {}) {
    this.adminService.carsFromDatabase(formdata).subscribe((res:any) => {
      this.data = res;
    });
  }
  getCarData() {
    for (const index in this.data) {
      console.log(this.data[index])
    }
  }




  editAndSubmit(condition:boolean, id:number) {

    if(condition) {
      console.log(this.condition, " If done clicked")
      this.editableItemIndex = -1;
    }
    else {
      this.active = false;
      console.log(this.condition, " If edit clicked")
      this.editableItemIndex = id;
    }
  }
}

