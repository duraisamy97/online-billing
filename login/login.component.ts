import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useral: any
  passal: any
  len: any
  Errormsg:any
  displayBasic:boolean=false

  loginForm = new FormGroup({
    uname: new FormControl('', Validators.required),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(private primengConfig: PrimeNGConfig, private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onSubmit(status: any) {
    if (status == "success") {
      if (this.loginForm.valid) {
        console.log('<-------------SUCCESS------------->');
        let form={
          Uname:this.loginForm.value.uname,
          Pass:this.loginForm.value.pwd
        }
        let url='/api/login';
        this.service.apipost(url,form).subscribe((res:any)=>{
          if(res.status==='SUCCESS'){
            alert("login Successfully");
            this.router.navigate(['test']);
          }else{
            this.Errormsg=res.data;
            this.displayBasic = true;
          }
        })
    
      }
    }
  }
  //validation
  fn() {
    if ((this.loginForm.value.uname == (null || undefined || "")) && (this.loginForm.value.pwd == (null || undefined || ""))) {
      this.useral = "please Enter Username";
      this.passal = "please Enter Password";
      let ddl = {
        status: "failure"
      }
      return this.onSubmit(ddl.status)
    }
    if ((this.loginForm.value.uname == (null || undefined || "")) && (this.loginForm.value.pwd !== (null || undefined || ""))) {
      this.passal = ' '
      this.useral = "please Enter Username";
      this.len=' '

      let ddl = {
        status: "failure"
      }

      return this.onSubmit(ddl.status)
    }

    if ((this.loginForm.value.pwd == (null || undefined || "")) && (this.loginForm.value.uname !== (null || undefined || ""))) {
      this.useral = ' '
      this.passal = "please Enter Password";

      let ddl = {
        status: "failure"
      }
      return this.onSubmit(ddl.status)
    }
    if ((this.loginForm.value.uname !== (null || undefined || "")) && (this.loginForm.value.pwd.length < 6)) {
      this.passal = ' '
      this.useral=' '
      this.len = "Passward mini Should be 6 Character";
    }
    if ((this.loginForm.value.uname !== (null || undefined || "")) && (this.loginForm.value.pwd.length >= 6)) {
      this.len = ' ';
      this.useral = ' ';
      this.passal = ' ';
      let ddl = {
        status: "success"
      }
      return this.onSubmit(ddl.status)
    }


  }
}
