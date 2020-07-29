import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Cliente } from 'src/app/servicios/Cliente.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
headers =  new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
//headers.append
  constructor(private http:HttpClient) {
    
  }
  //get para order
  getlistaCliente(){
    return this.http.get(environment.apiURL+'/Cliente').toPromise();
  }

// registro cliente
  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiURL+'/Cliente')
}

deleteUser(clienteId): Observable <any> {  
  
  return this.http.delete  (environment.apiURL +'/Cliente/'+ clienteId);   
}  

addCliente(data): Observable <any>{  
  return this.http.post(environment.apiURL+'/Cliente/',data,{headers:this.headers});
}


updateUser(clienteId,data): Observable <any>{  
  return this.http.put(environment.apiURL+'/Cliente/'+ clienteId,data);
}
}
