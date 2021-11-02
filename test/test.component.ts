import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
 items:any;
 result:any='';
 show:any=[];
 resu:any;
 shows:any=[];
 d:any;
total:any;

  register = new FormGroup({
    product: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    brand:new FormControl('',Validators.required)
  })
  


  constructor(private primengConfig: PrimeNGConfig, private messageService:MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.resu=localStorage.getItem("first");
    this.shows=JSON.parse(this.resu)
  }
  add(){ 
    if(this.register.valid){  
    this.items=this.register.value;
    let a=new Date;
    this.d=a.toLocaleDateString();
    this.items.date=this.d;
    this.show.push(this.items);
    localStorage.setItem("first",JSON.stringify(this.show));
    this.resu=localStorage.getItem("first");
    this.shows=JSON.parse(this.resu)
    console.log(this.show)
    this.calculatetotal()
    this.showSuccess()
    }
  }

calculatetotal(){
 for(let c of this.shows){
   let add=(c.price)*(c.quantity);
   this.total+=add;

 }
 
 console.log(this.total)
}
clear(){
this.shows=[]
}





  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Product Added Successfully'});
}
}