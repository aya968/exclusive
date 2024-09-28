import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './user/profile/profile.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { AuthInterceptor  } from './interceptor/auth.interceptor';
import { ErrorComponent } from './pages/error/error.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
// import { ProductComponent } from './services/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    SidebarComponent,
    ErrorComponent,
    ProductDetailsComponent,
    ProductsComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
