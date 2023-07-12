import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent {
addProductMessage:string | undefined
  constructor(private product:ProductService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

submit(data:Product){
// console.warn()
this.product.addProduct(data).subscribe((result: any) => {
  console.warn(result)
  if(result){
    this.addProductMessage="Product is added successfully"
  }
});

setTimeout( ()=>{
  this.addProductMessage= undefined
},3000)

}
}
