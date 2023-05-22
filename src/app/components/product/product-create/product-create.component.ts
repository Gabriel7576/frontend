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


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  numero?: number;

  product: Product = {
    id: 0,
    name: '',
    price: null
  }



  createProduct(): void {
    if (this.validaTela()) {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage("Executado com sucesso!");
        this.router.navigate(['/products']);
      })
    }

  }

  validaTela() :boolean {
    
    if(this.product.name.trim().length <= 0 ){
      this.productService.showMessage("Nome não pode estar vazio!");
      return false;
    }

    if(this.product.price <= 0){
      this.productService.showMessage("Preço não pode ser negativo!");
      return false;
    }

    if(this.product.price == null){
      this.productService.showMessage("Preço não estar vazio");
    }

    return true;
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
