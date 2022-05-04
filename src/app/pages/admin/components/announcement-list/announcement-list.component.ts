import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';



@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  data:any[] = [];


  constructor(private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
    this.carFromDatabase();
  }

  carFromDatabase(formdata = {}) {
    this.adminService.carsFromDatabase(formdata).subscribe((res:any) => {
      if (res.errorCode == 401){
          this.router.navigate(["admin/user/login"]);
      }
      else {
        this.data = res;
      }
      console.log("This is my data: ", this.data)
    });
  }
  deleteItem(id:number) {
    if(confirm("Do you really want delete item : " + id)) {
      console.log("Item deleted")
      this.adminService.deleteCar(id).subscribe((res:any) => {
      });
    }
  }

  // @Output() newItemEvent = new EventEmitter<any>();
  //
  // sendDataToParent(data:any) {
  //   this.newItemEvent.emit(data);
  //   console.log(data, "This is your data")
  // }
}
