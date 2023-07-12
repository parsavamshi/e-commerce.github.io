import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
popularProducts:undefined | Product[];
trendyProducts:undefined | Product[]
constructor(private prodduct:ProductService, config:NgbCarouselConfig) {
  config.interval = 2000;
  config.keyboard = true;
  config.pauseOnHover = true;
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.prodduct.popularProducts().subscribe((data)=>{
  this.popularProducts=data
  })

  this.prodduct.trendyProducts().subscribe((data)=>{
    this.trendyProducts=data
  })
}


}
