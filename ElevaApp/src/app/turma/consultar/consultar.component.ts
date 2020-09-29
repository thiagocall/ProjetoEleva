import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';
import { TurmaService } from 'src/app/services/turma.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarTurmaComponent implements OnInit {

  @ViewChild('dialogRef',null)
  private dialogRef: TemplateRef<any>;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private escolaServ: EscolaService,
    private turmaService: TurmaService) { }


    frmCadastro: FormGroup;
    displayedColumns: string[] = ['escola','disciplina', 'horarioInicial', 'horarioFinal','diaDaSemana','actions'];
    displayedColumnsEscola:string[] =  ['codregistro', 'nome','actions'];
    dataSource;
    filteredDataSource;
    filteredDataSourceTurma;
    selectedEscola;
    dataSourceTurma;

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

    getTurmas(codRegistro){
      this.turmaService.getTurmas(codRegistro).subscribe(
        response =>{
          console.log(response)
          this.dataSourceTurma = response;
          this.filteredDataSourceTurma = this.dataSourceTurma;
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
  
  this.selectedEscola = this.dataSource.find(x => x.codRegistro == codregistro)
  this.frmCadastro.patchValue({"codRegistro":this.selectedEscola.codregistro,
                               "nome":this.selectedEscola.nome})

                               console.log(codregistro)
  this.getTurmas(codregistro);
}

deleteTurma(id, reg){
  this.turmaService.deleteTurma(id).subscribe(
    response =>{
      this.toastr.success("Item excluído.", null, {
        progressBar:false,
        timeOut:2000
      });
      this.getTurmas(reg);
    },
    error =>{
      this.toastr.error("Erro ao Excluir item.");
    }
  )
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
