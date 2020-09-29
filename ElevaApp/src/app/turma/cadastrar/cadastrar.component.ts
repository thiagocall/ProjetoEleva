import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ViewChild, TemplateRef } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';
import { TurmaService } from 'src/app/services/turma.service';

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
              private escolaServ: EscolaService,
              private turmaService: TurmaService) { }

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
    
    console.log(codregistro);
    console.log(this.dataSource);
    // this.selectedEscola = null;
    this.selectedEscola = this.dataSource.find(x => x.codRegistro == codregistro)
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

    if(this.frmCadastro.valid && !(this.frmCadastro.get("codRegistro").value == "")){

        if(this.HorarioIsValid()){

          console.log(this.frmCadastro.value)
          const turma = this.frmCadastro.value;
          turma.horarioInicial = this.Schedules.get(turma.horarioInicial)
          turma.horarioFinal = this.Schedules.get(turma.horarioFinal)
          turma.codRegistro = this.frmCadastro.get("codRegistro").value;
          this.turmaService.postTurma(turma).subscribe(
            res=>{
              console.log(res)
              this.toastr.success("Turma Cadastrada",null,{
                progressBar:false,
                timeOut:2000
              })
              this.frmCadastro.reset();
            },
            err =>{

            }
          )

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
      codRegistro: [{value: '', disabled: true}],
      nome: [{value: '', disabled: true}],
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
