export class Square {
    constructor(private ctx: CanvasRenderingContext2D, private color:string) {}
    
    draw(index: number, height: number, element: number) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect( 5*index+5, height/1.5, 3, -element);
    }
}