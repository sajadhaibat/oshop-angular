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
  id;
  constructor(
      categoryService: CategoryService,
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    // Get Categories
    this.categories$ = categoryService.getCategories();
    console.log(this.categories$)
    // this.categories$.subscribe(res => console.log(res));.
      // Get a specific proudct.
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    if (this.id) {
        this.productService.getProduct(this.id).valueChanges().take(1).subscribe(p => {this.product = p; });
    }

  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm("Are you sure?")) {
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    }
  }
}
