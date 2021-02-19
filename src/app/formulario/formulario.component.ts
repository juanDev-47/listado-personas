import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService,private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("el indice es: " + (indice+1)) 
    );
  }

  agregarPersona(
  ) {
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput
    );
    // this.loggingService.enviarMensajeAConsola("Enviamos persona:" + persona1.nombre + " " + persona1.apellido);
    // this.personas.push(persona1);
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}
