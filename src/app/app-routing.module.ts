import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddclienteComponent } from 'src/app/formulario/cliente/addcliente/addcliente.component';
import { OrderComponent } from './modulos/orders/order/order.component';
import { OrderesComponent } from './modulos/orders/orderes/orderes.component';
import { ClienteComponent } from './formulario/cliente/cliente.component';

import { RegistrarseComponent } from './registro/registrarse/registrarse.component';




const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[
    {path:'orderes',
  component:OrderesComponent},
    {path:'order',
  component: OrderComponent},
  {path:'editar/:id',
  component:OrderComponent},
  {path:'cliente',
  component: ClienteComponent},
  {path:'addCliente',
  component:AddclienteComponent},
  {path:'usuario',
  component:RegistrarseComponent},
    

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
