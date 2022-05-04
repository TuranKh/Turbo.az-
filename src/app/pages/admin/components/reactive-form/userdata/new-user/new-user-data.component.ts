import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdminService} from "../../../../services/admin.service";

@Component({
  selector: 'new-user-data',
  templateUrl: './new-user-data.component.html',
  styleUrls: ['./new-user-data.component.css']
})
export class NewUserDataComponent implements OnInit {
  signUp = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    name: [],
    userpassword: []
  })


  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
  ) { }

  ngOnInit(): void {

  }

  newUserData() {
    this.adminService.signUpUser(this.signUp.value).subscribe((res:any) => {
      if (res) {
        alert("You successfully created a profile")
      }
      else {
        alert("Something went wrong")
      }
    })
  }



}
