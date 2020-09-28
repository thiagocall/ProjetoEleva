import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ViewChild, TemplateRef } from '@angular/core';
import { Escola, MockService } from 'src/app/services/mock.service';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarTurmaComponent implements OnInit {
  
  @ViewChild('dialogRef',null)
    private dialogRef: TemplateRef<any>;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private mock: MockService,
              private escolaServ: EscolaService) { }

    frmCadastro: FormGroup;
    displayedColumns: string[] = ['codregistro', 'nome','actions'];
    dataSource;
    filteredDataSource;
    selectedEscola;
    Schedules = new Map([
       ["1", "08:00"]
      ,["2", "09:00"]
      ,["3", "10:00"]
      ,["4", "11:00"]
      ,["5", "12:00"]
      ,["6", "13:00"]
      ,["7", "14:00"]
      ,["8", "15:00"]
      ,["9", "16:00"]
      ,["10", "17:00"]
    ])

    getEscolas() {
    
      this.escolaServ.getEscolas().subscribe(
        response =>{
          this.dataSource = response;
          this.filteredDataSource = this.dataSource;
        },
        error =>{
  
          this.toastr.error(error.message, null, {
            timeOut:2000,
            progressBar: false
          })
  
        }
      )
    }

    openDialog(){
      this.dialog.open(this.dialogRef)
    }

    closeDialog(){
      this.dialog.closeAll();
    }

    filterData(text:string){

    if(text.length >= 3){
      this.filteredDataSource = this.dataSource;
      this.filteredDataSource = this.filteredDataSource.filter(x => x.nome.toUpperCase().includes(text.toUpperCase()))

    } else{
      this.filteredDataSource = this.dataSource;
      return false
    }

  }

  selectEscola(codregistro: string){
    
    this.selectedEscola = this.dataSource.find(x => x.codregistro == codregistro)
    this.frmCadastro.patchValue({"codRegistro":this.selectedEscola.codRegistro,
                                 "nome":this.selectedEscola.nome})
  }



  HorarioIsValid(): boolean{

    const {horarioInicial, horarioFinal} = this.frmCadastro.value;
  
    const diff = horarioFinal - horarioInicial

    if (diff <=0){
      
      this.toastr.error("Erro no cadastro do horário",null,{
        progressBar:false,
        timeOut:2000
      })
      return false
      
    } else if (diff > 4) {

      this.toastr.error("Excede limite de horário",null,{
        progressBar:false,
        timeOut:2000
      })
      return false
    } else{

      return true;
    }

  }

  Add(){

    if(this.frmCadastro.valid){

        if(this.HorarioIsValid()){
         // console.log(this.frmCadastro.getRawValue())

          this.toastr.success("Turma Cadastrada",null,{
            progressBar:false,
            timeOut:2000
          })
        }
    }else{
        this.toastr.error("Erro nos dados preenchidos",null,{
          progressBar:false,
          timeOut:2000
        })
      }



  }



  Validate(){
    this.frmCadastro = this.fb.group({
      codRegistro: [{value: '', disabled: true},[Validators.required]],
      nome: [{value: '', disabled: true},[Validators.required]],
      disciplina: ['',[Validators.required]],
      horarioInicial: ['',[Validators.required]],
      horarioFinal: ['',[Validators.required]],
      diaDaSemana: ['',[Validators.required]],
    })
  }

  ngOnInit() {

    this.Validate();
    this.dataSource = this.getEscolas();
    this.filteredDataSource = this.dataSource;

  }

}
