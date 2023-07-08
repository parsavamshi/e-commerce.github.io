import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private r:Router){}

  ngOnInit(): void {

    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }



  Login(data:SignUp):void{
    console.warn(data)
  }

  showLogin= false
openLogin(){
this.showLogin=true
}
openSignup(){
  this.showLogin =false;
}
}
