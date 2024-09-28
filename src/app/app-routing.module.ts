import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import { ProfileComponent } from './user/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  { path: 'profile', component: ProfileComponent },
  {
    path: 'products', children: [
      { path: ':id', component: ProductsComponent },
      { path:'single/:id',component:ProductDetailsComponent}
    ]
  },
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
