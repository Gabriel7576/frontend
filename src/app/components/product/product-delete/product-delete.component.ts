import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.component';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

id: string;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  deleteProduct(id:string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Ação concluida com sucesso!");
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
