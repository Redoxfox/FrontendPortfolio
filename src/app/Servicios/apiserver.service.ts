import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { entityPrestamoI, entityPrestamoPostI, entityPrestamoGetIdI, entityPrestamoPutI} from 'src/app/Modelos/Prestamos.interface';
import { entityApuestasI, entityLeaguesI, entityLinksDatesI, entityNombreEquipoGetI,entityParamsMatchesI, requestI} from 'src/app/Modelos/Apuestas.intarface';
import { entityUserI, entityLoginI, entityTokenI } from 'src/app/Modelos/users';
@Injectable({
  providedIn: 'root'
})
export class ApiserverService {

  constructor(private HttpClient: HttpClient) { }
  
  /***********************************************************/
  /*                   SERVICIOS PRESTAMOS                   */
  /***********************************************************/
  getPrestamo(url:string){
    return this.HttpClient.get<entityPrestamoI[]>(url);
  }

  postPrestamo(url:string, entityPrestamo:entityPrestamoPostI){
    return this.HttpClient.post(url, entityPrestamo);
  }

  getPrestamoId(url:string){
    return this.HttpClient.get<entityPrestamoGetIdI>(url);
  }

  putPrestamo(url:string, entiyTipoActivo:entityPrestamoPutI){
    return this.HttpClient.put(url,entiyTipoActivo);
  }

/***********************************************************/
/*                   SERVICIOS APUESTAS                   */
/***********************************************************/
getPartidos(url:string){
  return this.HttpClient.get<entityApuestasI[]>(url);
}

getEquiposLiga(url:string){
  return this.HttpClient.get<entityNombreEquipoGetI[]>(url);
}

postRegister(url:string, entityUser:entityUserI){
  return this.HttpClient.post(url, entityUser);
}

postLogin(url:string, Login:entityLoginI){
  return this.HttpClient.post<entityTokenI>(url,Login);
}

getCalendario(url:string){
  return this.HttpClient.get<entityApuestasI[]>(url);
}

getMatchesDate(url:string, paramsDate:HttpParams){
  return this.HttpClient.get<entityApuestasI[]>(url,{params:paramsDate});
}

addMatchesDate(url:string, entityCalendario:entityApuestasI[]){
  return this.HttpClient.post<requestI>(url, entityCalendario);
}

getListLinksDates(url:string, entityLinksDates:entityLinksDatesI){
  return this.HttpClient.post<entityLinksDatesI[]>(url, entityLinksDates);
}

getListLeagues(url:string){
  return this.HttpClient.get<entityLeaguesI[]>(url);
}

}







