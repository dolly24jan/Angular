import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob:new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone:new FormControl(''),
  })
  get formDet(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value)
  }
  
}

