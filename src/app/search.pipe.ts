import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'search',
  pure: true
})

export class SearchPipe implements PipeTransform {
  constructor(private dataService: DataService) {}

  transform(data: any[], input: string, value: string): any[] {
    let result: any[] = [];
    
    if(input === "orderId")
    {
      result = data.filter(order => order.orderId.toString().includes(value));
    }
    else if(input === "customerId")
    {
      result = data.filter(customers => customers.customerId.toString().includes(value));
    }
    else if(input === "productId")
    {
      result = data.filter(products => products.productId.toString().includes(value));
    }
    else if(input === "price")
    {
      result = data.filter(products => products.price.toString().includes(value));
    }
    else if(input === "name")
    {
      result = data.filter(products => products.name.toString().toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

    return result;
  }
}