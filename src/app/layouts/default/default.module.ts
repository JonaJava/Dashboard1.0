import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OrderComponent } from 'src/app/modulos/orders/order/order.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog'; 
import { OrderItemsComponent } from 'src/app/modulos/orders/order-items/order-items.component';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTableModule} from '@angular/material/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {ToastrModule} from 'ngx-toastr'
import { OrderesComponent } from 'src/app/modulos/orders/orderes/orderes.component';
import { ClienteComponent } from 'src/app/formulario/cliente/cliente.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import{AgGridModule} from 'ag-grid-angular';
import { AddclienteComponent } from 'src/app/formulario/cliente/addcliente/addcliente.component';
import { DefaultComponent } from './default.component';
import { NgxPaginationModule } from 'ngx-pagination';
  
@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    OrderesComponent,
    ClienteComponent,
    AddclienteComponent,
    DefaultComponent
  
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzRadioModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    MatTableModule,
    NzIconModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    MatSortModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    NgxPaginationModule
   
    
    

   
    
  ]
})
export class DefaultModule { }
