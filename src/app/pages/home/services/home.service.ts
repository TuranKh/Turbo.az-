import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getData(filterData : any){
    var query = '?'
    for (const element in filterData) {
      if(filterData[element] != null) {
        query += element + "="+ filterData[element] + "&"
      }
    }
    // query is sent in the end of url thus in backend with usage of req.query we can accept data

    return this.http.get("http://localhost:5000/" + query)
  }

}
