import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { entityApuestasI, entityLeaguesI, entityLinksDatesI, entityNombreEquipoGetI, requestI } from 'src/app/Modelos/Apuestas.intarface';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-scrapper-apuestas',
  templateUrl: './scrapper-apuestas.component.html',
  styleUrls: ['./scrapper-apuestas.component.css']
})
export class ScrapperApuestasComponent implements OnInit {
  idliga:number=1
  itemActivos:entityApuestasI[] = [];
  itemNombreEquipos:entityNombreEquipoGetI[] = [];
  listRequest:entityLinksDatesI[] = [];
  idLiga:string="";
  urlFecha:string=""
  itemCalendario:entityApuestasI[]=[];
  status:string = '';
  errorMessage:string = '';
  ApuestasController:string= '';
  dataSt:any;
  HomeController:string= '';
  DatesController:string= '';
  NodeController:string= '';
  itemLinks=<entityLinksDatesI>{};
  itemListLeague:entityLeaguesI[]=[];
  constructor(private apuestasService:ApiserverService, private router:Router) { }

  ngOnInit(): void {
    //https://localhost:7205/api/Bets/GetListLeague
    this.ApuestasController = 'api/Bets/GetListLeague';
    const url = `${environment.apiUrl}${this.ApuestasController}`
    this.apuestasService.getListLeagues(url)
    .subscribe(data => {
      this.itemListLeague = data;
      //console.log(this.itemActivos);
    });
  }

  //search = new FormControl('')

  searchApi(){

    /*const nurl=this.idLiga
    const urlFecha=this.urlFecha
    console.log(nurl)
    console.log(urlFecha)
    const Params=new HttpParams({
      fromObject:{
        idLiga:this.idLiga,
        urlDate:this.urlFecha
      }
    })*/
    this.itemLinks={
       idLiga:parseInt(this.idLiga),
       link:this.urlFecha
    }
    console.log(this.itemLinks);
    this.DatesController="api/Bets/GetListDatesLeague"
    const url = `${environment.apiUrl}${this.DatesController}`
    this.apuestasService.getListLinksDates(url,this.itemLinks)
    .subscribe(data => {
      this.listRequest = data;
      //localStorage.setItem("data",JSON.stringify(data));
      console.log(data)
     });
  }

  search(idLiga:number, urlFecha:string){

    //const nurl=this.idLiga
    //const urlFecha=this.urlFecha
    //console.log(nurl)
    //console.log(urlFecha)
    const Params=new HttpParams({
      fromObject:{
        idLiga:idLiga,
        urlDate:urlFecha
      }
    })
   
    this.NodeController="api/fecha"
    const url = `${environment.apiNodeUrl}${this.NodeController}`
    this.apuestasService.getMatchesDate(url,Params)
    .subscribe(data => {
      this.itemCalendario = data;
      localStorage.setItem("data",JSON.stringify(data));
      console.log(data)
     });
  }
  
  save(){
     //this.dataSt=localStorage.clear();
     this.dataSt=localStorage.getItem("data");
     this.itemCalendario=JSON.parse(this.dataSt);
     console.log(this.itemCalendario)
     this.HomeController = 'api/Bets/AddMatchesDates';
     const url = `${environment.apiUrl}${this.HomeController}`
     this.apuestasService.addMatchesDate(url, this.itemCalendario)
     .subscribe(data => {
       //this.itemCalendario = data;
       localStorage.setItem("data",JSON.stringify(data));
       console.log(data)
      });

    /* console.log(typeof(this.apuestasService.addMatchesDate(url, this.itemCalendario)
     .subscribe(data => {
       //this.itemCalendario = data;
       //localStorage.setItem("data",JSON.stringify(data));
       //console.log(data)
      })))*/
  }

  nuevoElemento(){
    this.router.navigate(['nuevo_prestamo']);
  }

  EditarFila(id:number){
    this.router.navigate(['editar_prestamo', id]);
  }

}
