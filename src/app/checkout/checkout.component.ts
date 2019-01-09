import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout={
    orderItem:[],
    coupon:"",
    shipInf:{
      firstName:"John",
      lastName:"",
      phoneNo:"",
      email:"",
      address:"",
      note:""
    }
  }
  constructor() { }

  ngOnInit() {
    this.checkout.shipInf.firstName = "Emma";
  }

}
