import { Pipe, PipeTransform } from '@angular/core';
import {Product,typePD} from "../model/product";

@Pipe({
  name: 'selectProduct',
})
export class SelectProductPipe implements PipeTransform {

  transform(allProduct: Product[],productId:number): any {
    return allProduct.filter(p=>p.id===productId);
  }

}
