import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category-service.service';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product = {};
  constructor(
      categoryService: CategoryService,
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    // Get Categories
    this.categories$ = categoryService.getCategories().valueChanges();
    // this.categories$.subscribe(res => console.log(res));.
      // Get a specific proudct.
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    if (id) {
     this.productService.getProduct(id).take(1).subscribe(p => {this.product = p;});

    }

  }

  save(product) {
    console.log(product);
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
