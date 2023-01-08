import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPrestamoComponent } from './Prestamos/dashboard-prestamo/dashboard-prestamo.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptorInterceptor} from './jwt-interceptor.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevoPrestamoComponent } from './Prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { ScrapperApuestasComponent } from './apuestas/scrapper-apuestas/scrapper-apuestas.component';
import { PerfilComponent } from './Home/perfil/perfil.component';
import { CvComponent } from './Home/cv/cv.component';
import { GraphsComponent } from './Canvas/graphs/graphs.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { EnglishComponent } from './english/english.component';
import { TestComponent } from './test/test.component';

//import { EditarPrestamoComponent } from './Prestamos/editar-prestamo/editar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    DashboardPrestamoComponent,
    NuevoPrestamoComponent,
    ScrapperApuestasComponent,
    PerfilComponent,
    CvComponent,
    GraphsComponent,
    UsersComponent,
    LoginComponent,
    EnglishComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
