import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPrestamoComponent } from './Prestamos/dashboard-prestamo/dashboard-prestamo.component';
import {HeaderComponent} from './header/header.component';
import { NuevoPrestamoComponent } from './Prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { EditarPrestamoComponent } from './Prestamos/editar-prestamo/editar-prestamo.component';
import { ScrapperApuestasComponent } from './apuestas/scrapper-apuestas/scrapper-apuestas.component';
import { PerfilComponent } from './Home/perfil/perfil.component';
import { CvComponent } from "./Home/cv/cv.component";
import { GraphsComponent } from './Canvas/graphs/graphs.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { GuardSecurityGuard } from './guard-security.guard';
import { EnglishComponent } from './english/english.component';
const routes: Routes = [
  //Agregar ruta por defecto login
  {path:'',redirectTo:'perfil', pathMatch:'full'},
  //Agregar path de rutas
  {path:'header', component:HeaderComponent},
  {path:'dashboard_prestamo', component:DashboardPrestamoComponent},
  {path:'editar_prestamo/:id', component:EditarPrestamoComponent},
  {path:'nuevo_prestamo', component:NuevoPrestamoComponent},
  {path:'dashboard_scrapper', component:ScrapperApuestasComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'cv', component:CvComponent},
  {path:'graphs', component:GraphsComponent},
  //{path:'graphs', component:GraphsComponent,canActivate:[GuardSecurityGuard]},
  {path:'register', component:UsersComponent},
  {path:'english', component:EnglishComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  AppRoutingComponent = [
  DashboardPrestamoComponent,
  HeaderComponent,
  NuevoPrestamoComponent,
  EditarPrestamoComponent,
  ScrapperApuestasComponent,
  PerfilComponent,
  CvComponent,
  GraphsComponent,
  UsersComponent,
  LoginComponent,
  EnglishComponent
];