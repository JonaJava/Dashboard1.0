import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
user:Usuario;
  constructor( private usuarioservice: UsuarioService,
              private router : Router
    ) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    this.usuarioservice.login(form.value).subscribe(
      (res:any)=>{
      localStorage.setItem('token',res.token);
      this.router.navigateByUrl('/home');
      },
      err=>{
        console.log(err);   
      }
    );
  }
}

