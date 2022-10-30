import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductsComponent } from './main-products/main-products.component';


const routes: Routes = [
{path: "",component: MainComponent},
{path: "main-products",component: MainProductsComponent},
{path: "products",component: ProductsComponent}



  ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
