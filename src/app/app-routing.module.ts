import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  // {path:'', redirectTo:'/login', pathMatch:'full'},
  // {
  //   path:'login',
  //   loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
  // }
  {path:'', component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {
    path:'seller-home', component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {path:'seller-add-product', component:SellerAddProductComponent, canActivate:[AuthGuard]},
  {path:'seller-update-product/:id', component:SellerUpdateProductComponent, canActivate:[AuthGuard]},
  {path:'**', component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
