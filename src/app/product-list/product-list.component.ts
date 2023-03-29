import { Component } from '@angular/core';

import {Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(product: Product) {
    console.log(product);
    //window.alert('The product  has been shared!');
  }

  
  onNotify(product: Product) {
    console.log('You will be notified when the product goes on sale', product);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/