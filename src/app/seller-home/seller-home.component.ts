import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data';
import { faDeleteLeft, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {

  productList:undefined | Product[];
  productMessage:undefined | string;
  icon=faTrash
  edit=faEdit
constructor(private product:ProductService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.list()
}

deleteProduct(id:number){
  this.product.productDelete(id).subscribe((result)=>{
    if(result){
      this.productMessage="Product is deleted"
      this.list( )
    }
    });
    setTimeout(() => {
        this.productMessage=undefined
    }, 3000);
}
list(){
  this.product.productList().subscribe( (result)=>{
    if(result){
      this.productList=result
    }
  })
}
}
