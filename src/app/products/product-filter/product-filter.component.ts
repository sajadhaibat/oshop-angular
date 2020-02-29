import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../category-service.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

    categories$;
    constructor(categoryService: CategoryService) {
        this.categories$ = categoryService.getCategories();
  }
@Input('category') category;
  ngOnInit() {
  }

}
