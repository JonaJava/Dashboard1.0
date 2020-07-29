import { Component, OnInit,  } from '@angular/core';
import { ClienteService } from 'src/app/servicios/Cliente.service';
import { Cliente } from 'src/app/servicios/Cliente.model';
import {  ColDef,  GridApi,  ColumnApi  } from 'ag-grid-community'; 
import {  ToastrService  } from 'ngx-toastr';  
import {  Router  } from '@angular/router';  


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit  {

public  filas:Cliente[];
 
// row data and column definitions  
public cliente: Cliente[];  
public columnDefs: ColDef[];  
// gridApi and columnApi  
private api: GridApi;  
private columnApi: ColumnApi;  
  constructor(  private clienteservice : ClienteService, 
                private toastr : ToastrService,
                private router: Router,
             
                ) {
    this.columnDefs = this.createColumnDefs();

   }
  
  ngOnInit(): void {
    this.getDatos();
  }
  onGridReady(params): void {  
    this.api = params.api;  
    this.columnApi = params.columnApi;  
    this.api.sizeColumnsToFit();  
}  
 
private createColumnDefs() {  
  return [
   
    {  
      headerName: 'Nombre',  
      field: 'Nombre',  
      filter: true,  
      enableSorting: true,  
      editable: true,  
      sortable: true  
      
  }, {  
      headerName: 'Email',  
      field: 'Email',  
      filter: true,  
      editable: true,  
      sortable: true  
  }, {  
      headerName: 'Ciudad',  
      field: 'Ciudad',  
      filter: true,  
      sortable: true,  
      editable: true,  
       
  }, {  
      headerName: 'Celular',  
      field: 'Celular',  
      filter: true,  
      editable: true  
  }]  
}  

getDatos(){
  this.clienteservice.getCliente().subscribe( data =>{ this.cliente = data});
}
 onDeleteRow(){
    
   // debugger;  
     var selectedRows = this.api.getSelectedRows();  
    
    if (selectedRows.length == 0) {  
        this.toastr.error("error", "Seleccione fila que desea eliminar");  
        return;  
    }  
    this.clienteservice.deleteUser(selectedRows[0].ClienteID).subscribe(data => {  
        this.toastr.success("Crew Pass","Eliminado Con exito");  
        this.ngOnInit();  
        this.api.refreshRows(null);  
    });  
   
}  

 onAddRow(){
  this.router.navigate(['/addCliente']);
 }


}


