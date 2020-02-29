import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product) {
    this.db.list('/products').push(product);
  }
  getAll() {
    return this.db.list('/products').snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });
  }

  getProduct(productId) {
      return this.db.object('/products/' + productId);

  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete (productId) {
   return this.db.object('/products/' + productId).remove();
  }
}
