import { AfterViewInit, Component, ElementRef, HostListener,  ViewChild } from '@angular/core';
import { Square } from 'src/app/Modelos/square';
import { Sphere } from 'src/app/Modelos/sphere';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements AfterViewInit {
  //@ViewChild('canvasRef')canvasRef = {} as ElementRef;
  @ViewChild('canvasRef', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  public width = 800;
  public height = 400;

  private ctx : any
  private canvasElement: any
  private point:Array<number> = [];
  private points:Array<number>= [];
  @HostListener('document:mousemove',['$event'])
  onMouseMove = (e:any)=>{
    if (e.target.id==='canvasId') {
      console.log(e);
    }
  }
  constructor() {
   
  }
 
  ngOnInit(): void {
    this.points = this.fillPoint();
    //console.log(this.points)
  }
  
  ngAfterViewInit(): void {
    this.canvasElement = this.canvasRef.nativeElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.ctx.width=this.width;
    this.ctx.height=this.height;
    this.ctx.strokeStyle = '#000';
    let coor:Array<number[]> = this.orderArray(this.points);
    /*for (let index = 0; index < this.points.length; index++) {
      const element = this.points[index];
      this.drawSquere(index,this.height,element);
    }
    
    
    for (let index = 0; index < coor.length; index++) {
      const element = coor[index];
      console.log(element);
    }*/

    this.update(coor);
  }

  private orderArray(arr:Array<number>):Array<number[]>{
    let result:Array<number[]> = [];
    let aux:number = 0;
    let cont:number=0
    let arrayOrd= []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if(arr[i]<=arr[j]){
          aux=arr[i]
          arr[i]=arr[j]
          arr[j]=aux
        }
        arrayOrd[j]=arr[j]
        //console.log(result[cont])
        cont++
      } 
      result.push(arrayOrd)
      arrayOrd=[]
    }
    //console.log(result)
    return result;
  }

  private getRandomIntInclusive(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private fillPoint():Array<number> {
    for (let index = 0; index < 101; index++) {
      let numberRandom = this.getRandomIntInclusive(10,100);
      this.point.push(numberRandom)
    }
    return this.point;
  }

  private render():any{
    const canvasEl = this.canvasRef.nativeElement;
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.ctx=canvasEl.getContext('2d');
    this.ctx.fillRect(0,0,45,20);
    //console.log(typeof(this.ctx));
  }

  private drawSquere(height: number, ArrayElement: Array<number>, valorX:number) {
    const canvasEl = this.canvasRef.nativeElement;
    this.ctx=canvasEl.getContext('2d');
    let color=""
    for (let index = 0; index < ArrayElement.length; index++) {
      const element = ArrayElement[index];

      if (valorX==element){
        color="red"
      }else{
        color="black"
      }

      const square = new Square(this.ctx, color);
      square.draw(index, height, element);
      //console.log(element)
    }  
  }


   private drawSphere(ArrayElement: Array<number>, valorX:number) {
    const canvasEl = this.canvasRef.nativeElement;
    this.ctx=canvasEl.getContext('2d');
    let x = 0;
    let y = 0;
    let tamcir = 0
    let level = 0
    let color=""
    let cont=1
    for (let index = 0; index < ArrayElement.length; index++) {
      const element = ArrayElement[index];
      x=tamcir*25+15
      y=level*25+15
      if (valorX==element){
        color="red"
      }else{
        color="black"
      }
      //this.drawSphere(todo[cont].toString(),tamcir*25+15,level*25+15,"black")
      
      const sphere = new Sphere(this.ctx, color);
      sphere.draw(x, y, 5, element.toString());
      
      tamcir++
      if (cont==20) {
        tamcir=0
        level++
        cont=0
      }
      cont++
      
      //draw(x: number, y: number, ratio: number, text:string)
      //console.log(element)
    }  
  }
  /*private drawSphere(text: string, x: number, y: number, color: string) {
    const canvasEl = this.canvasRef.nativeElement;
    this.ctx=canvasEl.getContext('2d');
    const sphere = new Sphere(this.ctx, color);
    sphere.draw(x, y, 5,text);
  }*/

  private update(todo:Array<number[]>):void{
    let x = 0;    
        const i=setInterval(()=>{
        if(x<101){
          this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height); 
          this.drawSquere(this.height,todo[x],this.points[x]);
        }
        this.drawSphere(todo[x],this.points[x])
        console.log(this.points[x])
        x++
        if (x>100) {
          clearInterval(i);
        }
        },400);
  }

 /* private update(todo:Array<number>):void{
    let x = 0;
    let y = 0;
    let tamcir = 0
    let level = 0
    let cont = 0
    let magen = 0 
   const i=setInterval(()=>{
        magen=tamcir*25+15
        console.log(magen)

        if (magen<620) {
          this.drawSphere(todo[cont].toString(),tamcir*25+15,level*25+15,"black")
          tamcir++
        }else{
          tamcir=0
          level++
          if (level>3) {
            level=0
          }
        }
        
        if (todo[cont]==this.points[y]) {
          this.drawSquere(x,this.height,todo[cont],"black");
        } else {
          this.drawSquere(x,this.height,todo[cont],"red");
        }
        
        this.drawSquere(x,this.height+205, this.points[y],"black");
        this.ctx.clearRect(x, this.height, 3, this.points[y]);
        x++
        cont++
        
        if (x>99) {
          this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height); 
          x=0
          y++
        }
        if (cont>todo.length) {
          clearInterval(i);
        }
      },400);
  }*/

}
