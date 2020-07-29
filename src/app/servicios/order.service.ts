import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;//arriba
  orderItems:OrderItem[];//datos tabla para enviar a webapi  
  constructor(  private http : HttpClient ) { }



  SaveUpdateOrder(){
    console.log(this.orderItems.values)
           var body = {
          ...this.formData,
          OrderItems: this.orderItems
        };


    return  this.http.post(environment.apiURL+'/Order',body);
  }
  GetOrderList(){
    return  this.http.get(environment.apiURL+'/Order').toPromise();
    
  }

  GetOrderByID(id:number):any {
    return  this.http.get(environment.apiURL+'/Order/'+id).toPromise();
    
  }

  DeleteOrder(id:number) {
    return  this.http.delete(environment.apiURL+'/Order/'+id).toPromise();
    
  }
  
}

