import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { MainAddproductsComponent } from './main-addproducts/main-addproducts.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { PostButtonComponent } from './post-button/post-button.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    MainProductsComponent,
    MainAddproductsComponent,
    EditButtonComponent,
    PostButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
