import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  VerCv(){
    this.router.navigate(['cv']);
  }

  ViewGraps(){
    this.router.navigate(['graphs']);
  }

}
