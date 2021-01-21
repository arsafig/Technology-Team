import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  oculto: boolean = true;
  usuario!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }
  

  ngOnInit(): void {

    this.formularioUsuario();
 
  }


  formularioUsuario() {

    this.usuario = this._formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-z]*$')]],
      password: ['', [Validators.required, Validators.minLength(4),Validators.pattern('^[A-Z0-9~!@#$%^&*()_+=-]./"*$')]],
      privacidad: ['', [Validators.required]],
    }); 

  }


  validar(control: string): boolean {

    return (this.usuario.get(control)!.invalid && this.usuario.get(control)!.touched);

  }


  login() {
    
    if(this.usuario.valid){
      this._router.navigateByUrl('/dashboard');
    }

  }
}
