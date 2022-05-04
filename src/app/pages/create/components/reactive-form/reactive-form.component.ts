import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  Cars = [
    {key: 'toyota', value: 'Toyota'},
    {key: 'kia', value: 'Kia'},
    {key: 'honda', value: 'Honda'},
  ]
  Colors = [
    {key: 'white', value: 'Ağ'},
    {key: 'black', value: 'Qara'},
    {key: 'red', value: 'Qırmızı'}
  ]
  Fuels = [
    {key: 'petrol', value: 'Benzin'},
    {key: 'diesel', value: 'Dizel'},
    {key: 'gas', value: 'Qara'},
    {key: 'electric', value: 'Electro'},
    {key: 'hybrid', value: 'Hibrid'},
  ]


  loginForm = this.fb.group({
    brand: [],
    model: [],
    bodyType: [],
    mileage: this.fb.group({
      distance: [],
      unit: ['km']
    }) ,
    color: [],
    price: [],
    fuels: [],
    carDrives: [],
    transmission: [],
    year: [],
    engine: [],
    enginePower: []
  });

  loginFormObject = {
    contacts: {
      mobile: '',
      email: ''
    },
    username: 'araz',
    password: '',
    friends: [12, 23, 34],
    cities: [
      {
        name: "Baku",
        population: "1mln"
      }
    ]
  }



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }


  change(event: any) {
    console.log(event.target.value);
  }



}
