import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/servicios/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Cliente } from 'src/app/servicios/Cliente.model';
import { ClienteService } from 'src/app/servicios/Cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  listaCliente:Cliente[];
  isValid:boolean =true;
  pageActual: number = 1;
  
  constructor(public orderservice: OrderService,
              public dialog : MatDialog,
              private toastr : ToastrService,
              public clienteservice:ClienteService,
              private  router:Router,
              private currentRoute:ActivatedRoute
              

              
    ) { }
  

  ngOnInit(): void {

    let orderID = this.currentRoute.snapshot.paramMap.get('id');
    if (orderID == null)
      this.resetForm();
      else{
      this.orderservice.GetOrderByID(parseInt(orderID)).then(res=>{
        this.orderservice.formData = res.order;
        this.orderservice.orderItems = res.orderDetails;
       
      });
    }
    this.clienteservice.getlistaCliente().then(res => this.listaCliente= res as Cliente[]);
  
    
  }

  resetForm(form?: NgForm){
    if(form=null)
    form.resetForm()
    this.orderservice.formData={
    OrderID:null,
    OrderNo:Math.floor(100000 + Math.random() * 800).toString(),
    ClienteID:0,
    PMethod:'',
     GTotal:0,
     DeleteOrderItemIDs:''
};
this.orderservice.orderItems=[];
  }
  AddOrEditOrderItem(OrderID,orderItemIndex){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus= true;
    dialogConfig.disableClose= true;
    dialogConfig.width="50%";
    dialogConfig.data={orderItemIndex,OrderID};
    this.dialog.open(OrderItemsComponent,dialogConfig,).afterClosed().subscribe(res=>{
    this.UpdateGtotal();
    });
  }
  DeleteOrderItem( orderItemID:number,i:number){
    if(orderItemID!=null)
    this.orderservice.formData.DeleteOrderItemIDs += orderItemID + ",";
    this.orderservice.orderItems.splice(i,1);
    this.UpdateGtotal();
    
  }
  UpdateGtotal(){
  this.orderservice.formData.GTotal=  this.orderservice.orderItems.reduce((prev,curr)=>{
      return prev + curr.Total
    },0);
    
    console.log(this.orderservice.formData.GTotal )
  }
  validateForm (){
    this.isValid=true;
    if(this.orderservice.formData.ClienteID==0)
    this.isValid= false;
    else if (this.orderservice.orderItems.length==0)
    this.isValid= false;
    return this.isValid;
  }
  

  onSubmit(form:NgForm){
      if(this.validateForm()){
        this.orderservice.SaveUpdateOrder().subscribe(res=>{
          this.resetForm();
          this.toastr.success('Orden Creada','LA CREW PASS');
          this.router.navigate(['/orderes']);
        })
      }
  }

  
}
