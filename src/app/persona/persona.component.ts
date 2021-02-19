import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private PersonasService: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.PersonasService.saludar.emit(this.indice);
  }

}
