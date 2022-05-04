import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import { Router } from '@angular/router';


@Component({

  selector: 'app-change-announcement',
  templateUrl: './change-announcement.component.html',
  styleUrls: ['./change-announcement.component.css'],
})
export class ChangeAnnouncementComponent implements OnInit {
  data:any;
  initialCarData:any

  updateForm = this.fb.group({
    id: [],
    name: [''],
    url: [''],
    price: [],
    year: [],
    engine: [],
    mileage: []
  })
  public href: string = "";
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private adminService:AdminService, private router: Router) {

  }

  ngOnInit(): void {
    this.href = this.router.url;
    // @ts-ignore
    let id = Number((this.href.match(/[0-9]+/g))[0])
    this.changeItem(id)


  }
  changeItem(id:number) {
    this.adminService.getCurrentCar(id).subscribe((res:any) => {
      if (res.errorCode == 401){
        this.router.navigate(["admin/user/login"]);
      }
      else {
        this.initialCarData = res
        this.updateForm.setValue(this.initialCarData[0]);
        console.log(this.updateForm.value, "Here is it ")
      }
    })

  }

  save() {
    if(confirm("Do you want to update values?")) {
      this.adminService.updateCarDetails(this.updateForm.value).subscribe((res:any) => {})
    }
  }



}
