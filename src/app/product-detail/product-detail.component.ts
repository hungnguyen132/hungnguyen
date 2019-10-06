import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from '../service/product.service';
import {anwer, contentProduct, Product, typePD} from '../model/product';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  products: Product [];
  typeproduct: typePD[];
  anwer: anwer[];
  selectproduct:Product;




  public id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private productsevice: ProductService) {
    this.products = this.productsevice.getProduct();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });


    this.getProductfromService();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

    this.selectproduct = product;
  }


  getProductfromService():void{
    this.products=this.productsevice.getProduct();
  }
}
