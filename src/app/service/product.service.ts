import {Injectable} from '@angular/core';
import {anwer, contentProduct, Product, typePD,} from '../model/product'
import {Listproduct, ContentProduct, ListAnwer, ListTypeProduct} from '../list-product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(): Product[] {
    return Listproduct;
  }

  gettypePD(): typePD[] {
    return ListTypeProduct;
  }
  getAnwer():anwer[]{
    return ListAnwer;
  }

  constructor() {
  }
}
