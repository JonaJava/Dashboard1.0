import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/servicios/order.service';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-orderes',
  templateUrl: './orderes.component.html',
  styleUrls: ['./orderes.component.scss']
})
export class OrderesComponent implements OnInit {
  orderList;//sin modelo

  constructor(public orderservice :OrderService,
              private router : Router,
              public toastr:ToastrModule
                       
    ) { }

  ngOnInit(): void {
    this.refreshList();

  }
  refreshList(){
    this.orderservice.GetOrderList().then(res => this.orderList =res   )

  }
  openForEdit(orderID :number){
    this.router.navigate(['/editar/' + orderID])
  }

  OnOrderDelete(id:number)
{
  this.orderservice.DeleteOrder(id).then( res=>{
    this.refreshList();
    
  });
}

}
