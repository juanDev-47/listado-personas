import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de personas';
  personas: Persona[] = [];

  ngOnInit(): void {
    this.personas = this.PersonasService.personas;
  }

  constructor(private PersonasService: PersonasService ){

  }
  
  // personaAgregada(persona: Persona){
  //   // this.personas.push( persona );
  //   this.PersonasService.agregarPersona(persona);
  // }

}
