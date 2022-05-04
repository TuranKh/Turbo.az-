import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-announcement',
  templateUrl: './add-new-announcement.component.html',
  styleUrls: ['./add-new-announcement.component.css']
})
export class AddNewAnnouncementComponent implements OnInit {

  data:any
  constructor(private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewCar(formData: any){
    this.adminService.getNewCars(formData).subscribe((res:any) => {
      if (res.errorCode == 401){
        this.router.navigate(["admin/user/login"]);
      }
      else {
        this.data = res;
        console.log(res, " This is response in add-new-ann ")
      }
    });
  }

}
