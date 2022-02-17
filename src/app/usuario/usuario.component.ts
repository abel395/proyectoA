import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any;
  //usuarioAagregar:any= {};//el any no haria falta ya que le estamos asignando un objeto vacio,pero si ponemos objeto vacio sin el any da error en el html al llamar a usuarioAagregar.user
  usuarioAagregar={name:'',username:'',email:''}//asi no da problemas

  constructor(private usService: UsuarioService) { 
    this.listarUsuarios();
  }

  ngOnInit(): void {
  }

  eliminarUsuario (id_usuario:number) { 
    console.log("Eliminar usuario:" +id_usuario)
    this.usService.eliminarUsuario(id_usuario).subscribe ( {
                                            next: () =>  this.listarUsuarios(), 
                                            error: (e) => console.log(JSON.stringify(e))
                                        });
  }

  nuevoUsuario () {
    console.log("NuevoUsuario.");
    this.usService.nuevoUsuario (this.usuarioAagregar).subscribe ( {
                                          next: () =>  this.listarUsuarios(), 
                                          //next:() => this.usuarios.push(this.usuarioAagregar), //esto es para no llamar de nuevo al servicio, ya que es una fake api rest
                                          error: (e) => console.log(JSON.stringify(e))
                                        });
  }

  listarUsuarios():void{
    //como esto tarda un rato, mejor hacerlo en el constructor en vez del ngOnInit, para que vaya haciendo la peticion de primeras y tarde un poco
    this.usService.listarUsuarios().subscribe({
      next: (r) => this.usuarios = r,
      error: (e) =>console.log(JSON.stringify(e))
    });
  }

}
