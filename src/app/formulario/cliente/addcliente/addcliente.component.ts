import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/servicios/Cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/servicios/Cliente.model';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.scss']
})
export class AddclienteComponent implements OnInit {
  submitted: boolean= false;  
  formGroup: FormGroup;  
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public cliente: Cliente[]; 
  constructor(private formbuilder: FormBuilder,
              private toastr: ToastrService,
              private clienteservice : ClienteService,
              private router:Router,

              ) { 

              }

  ngOnInit(): void {
   /*  this.formGroup = this.formbuilder.group({  
      "Nombre": ["", Validators.required,Validators.minLength(5)],  
      "Email": ["", Validators.required],  
      "Ciudad": ["", Validators.required],  
      "Celular": ["", Validators.required]  
    });   */


    this.formGroup = new FormGroup({
      Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Email: new FormControl('', [Validators.required,  Validators.pattern(this.emailPattern)]),
      Ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Celular: new FormControl('', )
    });
    this.clienteservice.getCliente().subscribe( res =>{ this.cliente = res});
    

  }
  onSubmit(formValue:any) {  
    
    //this.clienteservice.addCliente(this.userForm.value) 
    this.clienteservice.addCliente(formValue) 
      .subscribe( data => {  
        this.toastr.success("Usuario Creado", "La CReW PAss");  //data.toString()
        this.router.navigate(['/cliente']);  
      });  
  }  
  onClose(){
    this.router.navigate(['/cliente']);  
   

  }
  /* inputValidator(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    
    } 
   

  } */
  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
   }
  

}
