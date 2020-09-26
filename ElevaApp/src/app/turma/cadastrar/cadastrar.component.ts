import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarTurmaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) { }

  frmCadastro: FormGroup;

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
      email: ['',[Validators.required]],
    })
  }

  ngOnInit() {

    this.Validate();

  }

}
