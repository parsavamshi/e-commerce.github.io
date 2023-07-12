import { Component } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuType:string = "default"
  sellerName:string="";

  constructor(private route: Router){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.events.subscribe((val:any)=>{
      if(val.url){
      // console.warn(val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          if(localStorage.getItem('seller')){
            let sellerStore =localStorage.getItem('seller')
          let sellerData = sellerStore && JSON.parse(sellerStore)[0]
          this.sellerName= sellerData.name
          }

          this.menuType="seller"
        }else{
          // console.warn("outside to seller area")
          this.menuType="default"
        }
      }
    })
  }
  logOut(){
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }
}
