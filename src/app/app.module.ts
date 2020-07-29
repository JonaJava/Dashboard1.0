import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/Button';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { OrderService } from './servicios/order.service';
import { OrderItemsComponent } from './modulos/orders/order-items/order-items.component';
import { SignupComponent } from 'src/app/registro/signup/signup.component';
import { RegistrarseComponent } from './registro/registrarse/registrarse.component';







registerLocaleData(es);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    RegistrarseComponent,
    
   
    
   
    
    
   
 
 
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  
    
   
  ],
  entryComponents:[OrderItemsComponent],
  providers:[OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
