// import { CanActivateFn } from '@angular/router';
// import { SellerService } from './services/seller.service';
// import { HttpClient  } from '@angular/common/http';


// export class AuthGuard {
//   constructor(private sellerService: SellerService) {}
// }
// export const authGuard: CanActivateFn = (route, state) => {
//   // return this.sellerService.isSellerLoggedIn;
//   const httpclient = new HttpClient();
//   const sellerService = new SellerService(httpclient); // Instantiate the SellerService object
//   return sellerService.isSellerLoggedIn;
// };

// import { CanActivateFn } from '@angular/router';
// import { SellerService } from './services/seller.service';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class authGuard  implements CanActivateFn{
//   constructor(private sellerService: SellerService) {}

//   canActivateFn(route: any, state: any) {
//     return this.sellerService.isSellerLoggedIn;
//   }
// }
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { SellerService } from "./services/seller.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('seller')){
  return true
    }

    return this.sellerService.isSellerLoggedIn.value; // Get the current value of the BehaviorSubject
  }


}
