import { Component, OnInit } from '@angular/core';
import {HomeService} from "./services/home.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  name: string = '';
  title = 'Page title';

  // :HomeService is needed so we can use its functions in homeService variable
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getCarsData()
  }

  getCarsData(filterData = {}) {
    this.homeService.getData(filterData).subscribe((res:any) => {
      this.data = res;
    });
  }

  acceptedFilterFormData(formData: any) {
    console.log('Home', formData);
    this.getCarsData(formData)
  }


}
