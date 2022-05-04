import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  carsFromDatabase(newCarData : any){
    return this.http.get("http://localhost:5000/admin/cars");
  }

  getNewCars(newCarData : any) {
    let query = "?"

    for (const element in newCarData) {
      console.log(element, ": ", newCarData[element])
      if (newCarData[element] != null) {
        query += element + "="+ newCarData[element] + "&"
      }
    }
    return this.http.post("http://localhost:5000/admin/newcar", newCarData)
  }
  deleteCar(id:number){
    let query = "?" + id;
    return this.http.delete("http://localhost:5000/admin/delete" + query)
  }
  getCurrentCar(id:number){
    let query = "?" + id
    return this.http.get("http://localhost:5000/admin/specific" + query)
  }
  updateCarDetails(updatedCar:any) {
    return this.http.post("http://localhost:5000/admin/update", updatedCar)
  }
  logInUser(loginData:any) {
    return this.http.post("http://localhost:5000/admin/login", loginData)
  }
  signUpUser(signUpData:any) {
    return this.http.post("http://localhost:5000/admin/signUp", signUpData)
  }


}
