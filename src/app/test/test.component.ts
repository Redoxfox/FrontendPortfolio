import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   // Declara una variable para almacenar el objeto MediaRecorder
   private mediaRecorder: any;
   // Declara una variable para almacenar el estado de la grabación (en curso o detenida)
  private recording = false;

  // Declara una variable para almacenar el archivo de audio generado
  private audioFile: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Inicializa el objeto MediaRecorder y comienza a grabar audio
    startRecording() {
      // Solicita permiso para acceder al micrófono
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          // Crea un nuevo objeto MediaRecorder y asigna el stream de audio como entrada
          this.mediaRecorder = new MediaRecorder(stream);
  
        
          // Comienza a grabar audio
          this.mediaRecorder.start();
          this.recording = true;
        });
  }

  

}



