import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EscolaService } from 'src/app/services/escola.service';
import { Escola } from 'src/app/services/mock.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarEscolaComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private escolaServ: EscolaService) { }

  frmCadastro: FormGroup;



  onClick(){

    if(this.frmCadastro.invalid || this.frmCadastro.untouched){

      this.toastr.error("Há dados não preenchidos",null,{
        timeOut:2000,
        progressBar: false
      })
      return false;

    }
    const escola = this.frmCadastro.value;
    console.log(escola);
    this.escolaServ.postEscola(escola).subscribe(
      response =>{

        this.toastr.success("Escola incluída com sucesso", null, {
          timeOut:2000,
          progressBar: false
        })

      },
      error =>{
        this.toastr.error("Falha na inclusão", null, {
          timeOut:2000,
          progressBar: false
        })

      }
    )
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
      email: ['',[Validators.required, Validators.email]],
    })
  }

  ngOnInit() {

    this.Validate();
  }

}
