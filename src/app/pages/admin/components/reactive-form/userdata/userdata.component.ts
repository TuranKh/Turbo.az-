import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AdminService} from "../../../services/admin.service";
import {Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  login = this.fb.group({
    email: [],
    userpassword: []
  })



  change = false;

  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  getUserData() {
    console.log(this.login.value)
    this.adminService.logInUser(this.login.value).subscribe(
      (res:any) => {
        if(res.hasOwnProperty('token')) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/admin/list']);
        }
      },
        error => {
          error.message
        }
    )
  }
  // newUserData() {
  //   this.adminService.signUpUser(this.signUp.value).subscribe((res:any) => {
  //   })
  //
  // }



}
