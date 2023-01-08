import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserverService } from 'src/app/Servicios/apiserver.service';
import { environment } from 'src/environments/environment';
import { entityLoginI, entityTokenI } from 'src/app/Modelos/users';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataLoginUser: FormGroup;
  itemLogin=<entityLoginI>{};
  loginController:string= '';
  itemToken=<entityTokenI>{};

  constructor(private formB:FormBuilder,
    private usersService:ApiserverService,
    private router:Router,
    private arouter:ActivatedRoute,
    private cookieservice:CookieService ) { 
    this.dataLoginUser= this.formB.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  loginUser(){
   
    this.itemLogin= {
      email: this.dataLoginUser.value.email,
      password: this.dataLoginUser.value.password
    }
    console.log(this.itemLogin);
    this.loginController= "api/Users/login";
    const url = `${environment.apiUrl}${this.loginController}`;
    //console.log(url);
    this.usersService.postLogin(url,this.itemLogin)
    .subscribe(data => {
      console.log(data.token)
      this.cookieservice.set("token",data.token)
      this.router.navigate(['graphs']);
    });
  }
}
