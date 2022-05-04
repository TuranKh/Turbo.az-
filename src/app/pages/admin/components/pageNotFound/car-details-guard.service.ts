import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AdminService} from "../../services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class CarDetailsGuardService implements CanActivate{
  constructor( private admin: AdminService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    console.log("Executed")
    console.log(this.admin.getCurrentCar(Number(route.paramMap.get('query'))));
    const carExist = !!this.admin.updateCarDetails(Number(route.paramMap.get('id')));
    console.log(carExist, " Car exists")
    if (carExist) {
      return true;
    }
    else  {
      this.router.navigate(['not-found']);
      return false;
    }

  };

}
