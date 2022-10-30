import { ProductsService } from './../products.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) { }


  @Input() products: any = [];




  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {
      console.log(res);

      this.products = res
    })


  }



}
