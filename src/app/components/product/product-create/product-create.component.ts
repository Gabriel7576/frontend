import { Product } from './../product.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

numero?:number;

  product:Product = {
    id: 0,
    name: '',
    price: null
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Executado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
