import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/servicios/order-item.model';
import { ItemService } from 'src/app/servicios/item.service';
import { Item } from 'src/app/servicios/item.model';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { OrderService } from 'src/app/servicios/order.service';



@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
 
  isValid=true;
  itemList:Item[];
  formData:OrderItem;// se carga con el dato que viene del matdiaglodata
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    public itemService:ItemService,
    public orderService:OrderService
  ) { }

  ngOnInit(): void {
    console.log(this.data.OrderID)
    console.log(this.data.orderItemIndex)
    this.itemService.getItemList().then(res =>this.itemList = res as Item[]) // carga itemList from api
     if (this.data.orderItemIndex==null)
    this.formData = {
      OrderItemID: null,
      OrderID: this.data.OrderID,
      ItemID: 0,
      ItemNombre: '',
      Precio: 0,
      Cantidad:0,
      Total: 0
    }
    else
    this.formData =this.orderService.orderItems[this.data.orderItemIndex]
  }

  updatePrecio(val){
    
    console.log(val);
    

  

    if(val.selectedIndex==0){
      this.formData.Precio=0;
    }
    else{
      this.formData.Precio=this.itemList[val.selectedIndex-1].Precio;
      this.formData.ItemNombre=this.itemList[val.selectedIndex-1].Nombre;
      
    } 
    this.updateTotal();
    this.formData.Cantidad=0;
    this.formData.Total=0;
    
  }
  updateTotal(){
    this.formData.Total = this.formData.Cantidad * this.formData.Precio;
  }

  onSubmit(form:NgForm){
    if(this.validateForm(form.value)){
      console.log(form.value.OrderID)//nulo
      if (this.data.orderItemIndex==null)// data = dato que viene por mat dialog
    this.orderService.orderItems.push(form.value);//se agrega item a la orderItems y se muestra en tabla
    else
    this.orderService.orderItems[this.data.orderItemIndex] = form.value;
    this.dialogRef.close();
    }

  }
  validateForm(formData:OrderItem){
    this.isValid=true;
    if(formData.ItemID==0)
    this.isValid=false;
    else if(formData.Cantidad==0)
    this.isValid =false;
    return this.isValid;
  }
}
