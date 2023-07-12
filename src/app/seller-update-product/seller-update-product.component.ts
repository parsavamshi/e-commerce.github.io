import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent {
productData:undefined | Product
productMessage:undefined | string
  constructor(private route:ActivatedRoute, private product:ProductService){}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      let productId = this.route.snapshot.paramMap.get("id")
      console.warn(productId)

     productId && this.product.getProduct(productId).subscribe((data)=>{
        console.warn(data)
        this.productData= data
      })
    }
  submit(data:any){
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="product has updated"
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
    console.warn(data)

  }
}
