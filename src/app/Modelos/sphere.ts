export class Sphere {
    constructor(private ctx: CanvasRenderingContext2D, private color:string) {}
    draw(x: number, y: number, ratio: number, text:string) {
      this.ctx.fillStyle = this.color;
      //this.ctx.fillRect( 5*index+5, height/2, 3, -element);
      this.ctx.font='10px arial'
      this.ctx.fillText(text,x+ratio-11, y+4);
      this.ctx.beginPath();
      this.ctx.arc(x, y, 10, 0, 2*Math.PI);
      this.ctx.stroke();
    }
}