import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() enviar: EventEmitter<any> = new EventEmitter();
  jugador:FormGroup; 
  mostrarCamposAdicionales:boolean = false; 

  pos:any[]= [
    {id: 'a' , valor: 'A'},
    {id: 'b' , valor: 'B'},
    {id: 'c' , valor: 'C'},
    {id: 'd' , valor: 'D'},
    {id: 'e' , valor: 'E'}
  ]
    
  
  constructor(
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formularioJugador();
    this.enviar.emit(this.jugador);
  }

  formularioJugador(){

    this.jugador = this._formBuilder.group({
    
      primerNombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z]*$')]],
      apellido: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      alturaPulgadas: ['',Validators.max(10)],
      alturaPies: ['',Validators.max(10)],
      peso: ['',Validators.max(10)],
      posicion: ['',Validators.required],
      fechaNacimiento: ['',Validators.required],
      edad: ['',Validators.required],
      comentarios: [''],
      tiempoPosicion: ['']

    });
  }
  
  validar(control: string): boolean {
    return (this.jugador.get(control)!.invalid && this.jugador.get(control)!.touched);
  }

  CamposAdicionales(){

    if (this.jugador.value['posicion'] == 'c'){
      this.mostrarCamposAdicionales = true;      
    }else{
      this.mostrarCamposAdicionales = false;      
    }
  }

  edad() {

    let edad = (Date.now() - this.jugador.value['fechaNacimiento'] ) / (24 * 3600 * 365.25 * 1000); 
    this.jugador.controls.edad.setValue(edad); 
  }

  guardarDatosJugador(){
    this.enviar.emit(this.jugador); 
  }

}
