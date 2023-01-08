import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { entityPrestamoI } from 'src/app/Modelos/Prestamos.interface';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-prestamo',
  templateUrl: './dashboard-prestamo.component.html',
  styleUrls: ['./dashboard-prestamo.component.css']
})
export class DashboardPrestamoComponent implements OnInit {
  itemActivos:entityPrestamoI[] = [];
  status:string = '';
  errorMessage:string = '';
  HomeController:string= '';
  constructor(private prestamoService:ApiserverService, private router:Router) { }

  ngOnInit(): void {
    this.HomeController = 'api/Home';
    const url = `${environment.apiUrl}${this.HomeController}`
    this.prestamoService.getPrestamo(url)
    .subscribe(data => {
      this.itemActivos = data;
      //console.log(this.itemActivos);
    });
  }

  search = new FormControl('')
  nuevoElemento(){
    this.router.navigate(['nuevo_prestamo']);
  }

  EditarFila(id:number){
    this.router.navigate(['editar_prestamo', id]);
  }
  //@Output('search') searchEmitter = new EventEmitter<string>();
 
 /* EditarFila(id:number){
     this.router.navigate(['editar_activos', id]);
   }
 
   nuevoElemento(){
     this.router.navigate(['nuevo_activos']);
   }
 
   deleteActivosId(id:number){
     const url = `/api/Activos/${id}`;
     this.usuarioService.deleteActivos(url)
     .subscribe({
           next: data => {
             this.status = 'Delete successful';
             this.ngOnInit();
           },
           error: error => {
             this.errorMessage = error.message;
             console.error('There was an error!', error);
          }
     });
   }*/

}




