import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personaData: any = {nombre:"Abel",apellidos:"Priego Borrego",edad:27};

  constructor() { }

  eventoBotonAngular(){
      console.log('Ejecutamos el evento del botón para',this.personaData.nombre);
  }

  ngOnInit(): void {
  }

}
