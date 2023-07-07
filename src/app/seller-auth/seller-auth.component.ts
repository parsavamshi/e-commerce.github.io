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
  signUp(data:SignUp):void{
    console.warn(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
        this.r.navigate(['seller-home'])
      }
    })
  }
}
