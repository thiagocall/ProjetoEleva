import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CepService } from 'src/app/services/cep.service';
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
              private escolaServ: EscolaService,
              private cepService: CepService) { }

  frmCadastro: FormGroup;



  getAddressByCep(cep:string){

    const reg = /\d{8}/;

    const execRe = reg.exec(cep);

    if(!execRe){

      this.toastr.error("Cep inválido.",null,{
        progressBar:false,
        timeOut:2000
      })

      return false;

    }

    this.cepService.getCep(cep).subscribe(
      response =>{
        this.setCep(response)
      },
      error =>{
        this.toastr.error("Erro ao obter cep.",null,{
          progressBar:false,
          timeOut:2000
        })
      }
    )

  }


  setCep(cep){

    this.frmCadastro.patchValue({"endereco": cep.logradouro,
                                 "bairro":cep.bairro,
                                 "cidade":cep.localidade,
                                 "coduf":cep.uf
                                 });

  }

  Add(){

    if(this.frmCadastro.invalid || this.frmCadastro.untouched){

      this.toastr.error("Há dados não preenchidos",null,{
        timeOut:2000,
        progressBar: false
      })
      return false;

    }
    const escola = Object.assign({}, this.frmCadastro.value)
    console.log(escola);
   
    this.escolaServ.postEscola(escola).subscribe(
      response =>{

        this.toastr.success("Escola incluída com sucesso", null, {
          timeOut:2000,
          progressBar: false
        })

        this.frmCadastro.reset();

      },
      error =>{
        this.toastr.error("Falha na inclusão", null, {
          timeOut:2000,
          progressBar: false
        })})
  }
  
  Validate(){
    this.frmCadastro = this.fb.group({
      codregistro: ['',[Validators.required, Validators.pattern(/^\d{2}.\d{2}.\d{3}/)]],
      nome: ['',[Validators.required]],
      endereco: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      bairro: ['',[Validators.required]],
      cep: ['',[Validators.required, Validators.pattern(/^\d{8}/)]],
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
