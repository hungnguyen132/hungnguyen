import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product,typePD} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private productservice: ProductService) {
  }

  products: Product[];
  selectProduct: Product;

  getProductfromService(): void {
    this.products = this.productservice.getProduct();
  }


  ngOnInit() {
    this.getProductfromService();
  }

  Onselectproduct(product: Product): void {
    this.selectProduct = product;
  }

  p: number = 1;



  nextpage() {
    if (this.p <= 2)
      this.p = this.p + 1;
  }

  prevout() {
    if (this.p > 1)
      this.p = this.p - 1;
  }
  OnselectProduct(product: Product): void {

    this.selectProduct = product;
  }

}
