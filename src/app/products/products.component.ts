import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string;
  constructor(productService: ProductService,
              route: ActivatedRoute
              ) {
    productService.getAll().subscribe(products => {
      this.products = products;
      route.queryParamMap.subscribe(params => {
        console.log(this.products);
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category ) : this.products;
        });
    });

  }

}
