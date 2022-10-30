import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService ) {}


@Input() products: any = [];


isSubmit: boolean = false

productRegisterForm!: FormGroup;

id: string ='';

  ngOnInit(): void {
    this.id = this.productsService.product.id;
    this.productRegisterForm = this.formBuilder.group

  }


  submitProduct(){
    this.isSubmit = true;
    if(this.productRegisterForm.valid){
    }
    if(this.id === ''){
      const newproduct: product = {
        id: '',
        name: this.productRegisterForm.get('name')?.value,
        price: this.productRegisterForm.get('price')?.value,
        description: this.productRegisterForm.get('description')?.value,
        image: this.productRegisterForm.get('image')?.value,
    }


    else{
      const modproduct: product = {
        id: this.id,
          name: this.productRegisterForm.get('name')?.value,
          price: this.productRegisterForm.get('price')?.value,
          description: this.productRegisterForm.get('description')?.value,
          stars: this.productRegisterForm.get('stars')?.value,
          image: this.productRegisterForm.get('image')?.value,
        }
        this.productsService.editProduct(modproduct).subscribe();
        this.id = '';
    }
    this.productRegisterForm.reset();
      this.isSubmit = false;
      this.router.navigate(['/products'])
  }



}
