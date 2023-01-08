import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {entityPrestamoI, entityPrestamoPostI } from 'src/app/Modelos/Prestamos.interface';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';
import { entityUserI } from 'src/app/Modelos/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  createNewUser: FormGroup;
  itemUser=<entityUserI>{};
  //itemTipoActivosAll:entityTipoActivoGetI[] = [];
  itemPrestamos:entityPrestamoI[] = [];
  //TipoActivoController:string= '';
  completeName:string= '';
  usersController:string= '';
  constructor(private formB:FormBuilder,
    private usersService:ApiserverService,
    private router:Router,
    private arouter:ActivatedRoute) {
      this.createNewUser = this.formB.group({
        nick: ['',Validators.required],
        first_name: ['',Validators.required],
        last_name: ['',Validators.required],
        email:['',Validators.required],
        password: ['',Validators.required],
        confirm_password: ['',Validators.required]
      })
     }

  ngOnInit(): void {
  }

  addUser(){
    this.completeName= this.createNewUser.value.first_name+ this.createNewUser.value.last_name
    this.itemUser= {
      id:0,
      nick: this.createNewUser.value.nick,
      name: this.completeName,
      email: this.createNewUser.value.email,
      password: this.createNewUser.value.password,
      rol:"visitor"
    }
    console.log(this.itemUser);
   this.usersController= "api/Users/users";
    const url = `${environment.apiUrl}${this.usersController}`;
    console.log(url);
    this.usersService.postRegister(url, this.itemUser)
    .subscribe(data => {
      //console.log(data);
      this.router.navigate(['login']);
    });
  }

}
