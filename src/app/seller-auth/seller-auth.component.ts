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
  authError:String=''
  constructor(private seller:SellerService, private r:Router){}

  ngOnInit(): void {

    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
    if(data){
      this.showLogin = true
    }
  }



  Login(data:SignUp):void{
    // console.warn(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      // console.warn(isError)
      if(isError){
        this.authError = "Email or password is not correct";
      }
    })
  }

  showLogin= false
openLogin(){
this.showLogin=true
}
openSignup(){
  this.showLogin =false;
}


}
