import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor( public service : UsuarioService,  
                public toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Nuevo usuario creado!', 'Registro exitoso.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Nombre de usuario ocupado','Registro fallido.');
                break;

              default:
              this.toastr.error(element.description,'Registro fallido.');       
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }


}
