import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {

  nombrePersona: String = "";
  /*
  formReactivo: FormGroup= this.formulario.group({
    usuario: ['',[Validators.required]],
    comentario:['',[Validators.required, Validators.minLength(10)]]
  });
  //esta forma no funciona del todo
  */
  formReactivo:FormGroup = new FormGroup ( {
    usuario: new FormControl('', Validators.required),
    comentarios: new FormControl('',  [Validators.required, Validators.minLength(10)])
  });

  get f(){
    return this.formReactivo.controls;
  }

  constructor(private route:ActivatedRoute, private formulario: FormBuilder) { 
  }
  //si quisieramos hacer accesible desde el html el route deberia ser publico


  ngOnInit(): void {
   
    this.route.params.subscribe(params =>{
      if(params["nombre"] !=null){
        this.nombrePersona = params["nombre"];
      }
    });
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //console.log(this.f);
    
  }

  mostrarComentario() {
    console.log ("El usuario '"+this.f['usuario'].value+"' ha escrito el comentario: '"+this.f['comentarios'].value+"'.");
  }

}
