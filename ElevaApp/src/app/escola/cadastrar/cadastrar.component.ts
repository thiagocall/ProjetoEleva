import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarEscolaComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) { }

  frmCadastro: FormGroup;

  click(){

    if(this.frmCadastro.invalid || this.frmCadastro.untouched){

      this.toastr.error("Há dados não preenchidos",null,{
        timeOut:2000,
        progressBar: false
      })

    }
    console.log(this.frmCadastro.value)
  }
  
  Validate(){
    this.frmCadastro = this.fb.group({
      codregistro: ['',[Validators.required]],
      nome: ['',[Validators.required]],
      endereco: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      bairro: ['',[Validators.required]],
      cep: ['',[Validators.required]],
      cidade: ['',[Validators.required]],
      coduf: ['',[Validators.required]],
      responsavel: ['',[Validators.required]],
    })
  }

  ngOnInit() {

    this.Validate();
  }

}
