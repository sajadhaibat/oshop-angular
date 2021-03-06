import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment.prod';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category-service.service';
import {ProductService} from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    CheckOutComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule,
      FormsModule,
      CustomFormsModule,
      RouterModule.forRoot([
          { path: '', component: ProductsComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'shopping-cart', component: ShoppingCartComponent },
          { path: 'login', component: LoginComponent },

          { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
          { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
          { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
          { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
          { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard] },
          { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
          { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard] }
      ])
  ],
  providers: [
      AuthGuard,
      CategoryService,
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
