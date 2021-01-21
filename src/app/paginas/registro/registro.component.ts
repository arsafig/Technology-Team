import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formulario1: FormGroup;
  formulario2: FormGroup;
  isEditable=true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
     
  }

  recibeF1(form: any) { 
    this.formulario1 =  form; 
    console.log(form.valid);
    
  }
  recibeF2(form2: any) { 
    this.formulario2 =  form2; 
  }

}
