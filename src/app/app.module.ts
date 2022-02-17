import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HijoPrComponent } from './hijo-pr/hijo-pr.component';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import { CSeccion3Component } from './c-seccion3/c-seccion3.component';
import { ProductosService } from './servicio/productos.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './servicio/usuario.service';


const routes: Routes= [
  {path:'', component: CSeccion2Component},
  {path:'seccion2', component: CSeccion2Component},
  {path:'seccion3', component: CSeccion3Component},
  {path:'seccion2/:nombre', component: CSeccion2Component},
  {path:'seccion3/:ciudad/:poblacion', component: CSeccion3Component},
  {path:'usuario', component: UsuarioComponent},
  {path:'**', component: CSeccion2Component}//esta deberia ser la ultima, ya que es cuando no se cumple ninguna de las anteriores
];


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    HijoPrComponent,
    CSeccion2Component,
    CSeccion3Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder, ProductosService, UsuarioService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
