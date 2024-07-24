import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CreatepeliculaComponent } from './components/createpelicula/createpelicula.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { EditarpeliculaComponent } from './components/editarpelicula/editarpelicula.component';

const routes: Routes = [
  { path: 'inicio', component:HomeComponent}, // aqui decimos que [routerLink]="['/inicio'] redirecciona al componente home
  { path: 'peliculas', component:PeliculasComponent},
  { path: 'guardar-pelicula', component:CreatepeliculaComponent},
  { path: 'contacto', component:ContactoComponent},
  { path: 'pelicula/:id', component:DetallepeliculaComponent}, //:id es para buscar la pelicula
  { path: 'edita-pelicula/:id', component:EditarpeliculaComponent},
  { path: '**', component:HomeComponent}, //algo que no corresponde redirecciona al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
