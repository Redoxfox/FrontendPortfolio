import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor() { }

 /* drawSphere(ctx:any, point:[], width:number):any{
    for (let index = 0; index < point.length; index++) {
      const element = point[index];
      ctx.font='15px arial'
      ctx.fillText(element,(width/2)-5, 50*element+5);
      ctx.beginPath();
      ctx.arc(width/2, 50*element, 20, 0, 2*Math.PI);
      ctx.stroke();
      if (index < point.length-1) {
        ctx.moveTo(width/2,50*element+20);
        ctx.lineTo(width/2,50*element+50-20);
        ctx.stroke();
      }
    }
  }*/

}
