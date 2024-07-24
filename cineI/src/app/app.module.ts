import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreatepeliculaComponent } from './components/createpelicula/createpelicula.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { EditarpeliculaComponent } from './components/editarpelicula/editarpelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent,
    ContactoComponent,
    CreatepeliculaComponent,
    DetallepeliculaComponent,
    EditarpeliculaComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //PARA LOS SERVICIOS
    FormsModule  //PARA CREAR FORMULARIOS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
