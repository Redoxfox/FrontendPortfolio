import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {entityPrestamoI, entityPrestamoPostI } from 'src/app/Modelos/Prestamos.interface';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nuevo-prestamo',
  templateUrl: './nuevo-prestamo.component.html',
  styleUrls: ['./nuevo-prestamo.component.css']
})
export class NuevoPrestamoComponent implements OnInit {
  createNewPrestamo: FormGroup;
  itemPrestamo=<entityPrestamoPostI>{};
  //itemTipoActivosAll:entityTipoActivoGetI[] = [];
  itemPrestamos:entityPrestamoI[] = [];
  //TipoActivoController:string= '';
  prestamoController:string= '';
  constructor(private formB:FormBuilder,
    private prestamoService:ApiserverService,
    private router:Router,
    private arouter:ActivatedRoute) {
   
      this.createNewPrestamo = this.formB.group({
        fechaprestamo: ['',Validators.required],
        banco: ['',Validators.required],
        idgasto: ['',Validators.required],
        cantretiro:['',Validators.required],
        cuota: ['',Validators.required],
        nrocontracto: ['',Validators.required],
        fechaproxpago:['',Validators.required],
        estado: ['',Validators.required]
      })

    }

  ngOnInit(): void {
    const HomeController = 'api/Home';
    const url = `${environment.apiUrl}${HomeController}`
    this.prestamoService.getPrestamo(url)
    .subscribe(data => {
      this.itemPrestamos = data;
      //console.log(this.itemActivos);
    });
  }

  agregarPrestamo(){

    this.itemPrestamo= {
      fechaprestamo: this.createNewPrestamo.value.fechaprestamo,
      banco: this.createNewPrestamo.value.banco,
      idgasto:this.createNewPrestamo.value.nroActivo,
      cantretiro: this.createNewPrestamo.value.cantretiro,
      cuota: this.createNewPrestamo.value.cuota,
      nrocontracto: this.createNewPrestamo.value.nrocontracto,
      fechaproxpago:this.createNewPrestamo.value.fechaproxpago,
      estado: this.createNewPrestamo.value.estado
    }
    this.prestamoController= "api/Home";
    const url = `${environment.apiUrl}${this.prestamoController}`;
    console.log(url);
    this.prestamoService.postPrestamo(url, this.itemPrestamo)
    .subscribe(data => {
      console.log(this.itemPrestamo);
      this.router.navigate(['dashboard_prestamo']);
    });

}

}