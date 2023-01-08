import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { entityPrestamoPutI } from 'src/app/Modelos/Prestamos.interface';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamo.component.html',
  styleUrls: ['./editar-prestamo.component.css']
})
export class EditarPrestamoComponent implements OnInit {
  updatePrestamo: FormGroup;
  submitted = false;
  itemPrestamo=<entityPrestamoPutI>{};
  id:number = 0 ;
  idTipo:number = 0;
  PrestamoController:string= '';
  constructor(private formB:FormBuilder,
    private ApiserverService:ApiserverService,
    private router:Router,
    private arouter:ActivatedRoute
    ) {
      this.updatePrestamo = this.formB.group({
        idcreditos: ['',Validators.required],
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
    this.id=Number(this.arouter.snapshot.params["id"]);
    this.PrestamoController = "api/Home";
    const url = `${environment.apiUrl}${this.PrestamoController}` + `/${this.id}`;
    this.ApiserverService.getPrestamoId(url)
    .subscribe(data => {
      //console.log(data.fechaprestamo);
      //console.log(data);
     
   
      
      this.updatePrestamo.controls["fechaprestamo"].setValue(data.fechaproxpago);
      this.updatePrestamo.controls["banco"].setValue(data.banco);
      this.updatePrestamo.controls["idgasto"].setValue(data.idgasto);
      this.updatePrestamo.controls["cantretiro"].setValue(data.cantretiro);
      this.updatePrestamo.controls["cuota"].setValue(data.cuota);
      this.updatePrestamo.controls["nrocontracto"].setValue(data.nrocontracto);
      this.updatePrestamo.controls["fechaproxpago"].setValue(data.fechaproxpago);
      this.updatePrestamo.controls["estado"].setValue(data.estado);
      //console.log(this.updatePrestamo);
    });
  }

  updataPrestamo(){

    this.itemPrestamo= {
      idcreditos:this.id,
      fechaprestamo: this.updatePrestamo.value.fechaprestamo,
      banco: this.updatePrestamo.value.banco,
      idgasto: this.updatePrestamo.value.idgasto,
      cantretiro: this.updatePrestamo.value.cantretiro,
      cuota: this.updatePrestamo.value.cuota,
      nrocontracto: this.updatePrestamo.value.nrocontracto,
      fechaproxpago: this.updatePrestamo.value.fechaproxpago,
      estado:this.updatePrestamo.value.estado
     
    };
    console.log(this.updatePrestamo.value.fechaprestamo)
    const url = `${environment.apiUrl}${this.PrestamoController}` +`/${this.id}`;
    this.ApiserverService.putPrestamo(url, this.itemPrestamo)
    .subscribe(data => {
      //console.log(data);
      this.router.navigate(['dashboard_prestamo']);
    });

  }

}

