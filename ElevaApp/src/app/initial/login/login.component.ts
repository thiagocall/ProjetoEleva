import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder ) { }
  error;

  frmLogin: FormGroup;


  validate(){

    this.frmLogin = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit() {
    
    this.validate()

  }

}
