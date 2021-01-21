import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-equipos',
  templateUrl: './formulario-equipos.component.html',
  styleUrls: ['./formulario-equipos.component.css']
})
export class FormularioEquiposComponent implements OnInit {

  @Output() enviar: EventEmitter<any> = new EventEmitter();

  equipo:FormGroup; 
  tabla:any=[]; 
  mostrarCamposAdicionales:boolean = false; 


  listadoConferencias:any[]= [
    {id: 'este' , valor: 'Este'},
    {id: 'oeste' , valor: 'Oeste'},
    {id: 'sur' , valor: 'Sur'},
    {id: 'norte' , valor: 'Norte'},
  ]; 

  listadoDeCiudades:any[]  = [
      {id: '1', valor:'Pomona'},
      {id: '2', valor:'Port Saint Lucie	'},
      {id: '3', valor:'Portland	'},
      {id: '4', valor:'Providence'},
      {id: '5', valor:'Provo	'},
      {id: '6', valor:'Pueblo	'},
      {id: '7', valor:'Raleigh	'},
      {id: '8', valor:'Rancho Cucamonga	'},
      {id: '9', valor:'Reno	'},
      {id: '10',valor:'Richmond	'},
      {id: '11',valor:'Richmond	'},
      {id: '12',valor:'Riverside	 '},
      {id: '13',valor:'Rochester	  '},
      {id: '14',valor:'Rockford	'},
      {id: '15',valor:'Roseville	'}
  ];
    
  
  constructor(
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formularioEquipos();
    this.enviar.emit(this.equipo); 
  }

  formularioEquipos(){

    this.equipo = this._formBuilder.group({
    
      abreviatura: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(3),Validators.pattern('^[a-zA-Z]*$')]],
      conferencia: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      comentarios: [''],
      nombreEquipo: ['',Validators.minLength(10)],
      ciudad: [''],
    });

  }

  
  validar(control: string): boolean {
    return (this.equipo.get(control)!.invalid && this.equipo.get(control)!.touched);
  }

  
  guardarDatosEquipo(){
    
    this.tabla.push(this.equipo.value); 
    this.enviar.emit(this.equipo); 

  }
}
