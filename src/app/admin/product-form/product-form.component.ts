import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category-service.service';
import {ProductService} from '../../product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  constructor(categoryService: CategoryService,private productService: ProductService) {
    this.categories$ = categoryService.getCategories().valueChanges();
    this.categories$.subscribe(res => console.log(res));
  }

  save(product) {
    console.log(product);
    this.productService.create(product);
  }
}
