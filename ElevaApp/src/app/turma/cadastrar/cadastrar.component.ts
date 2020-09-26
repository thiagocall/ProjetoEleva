import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ViewChild, TemplateRef } from '@angular/core';
import { Escola, MockService } from 'src/app/services/mock.service';

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
              private mock: MockService) { }

    frmCadastro: FormGroup;
    displayedColumns: string[] = ['codregistro', 'nome','actions'];
    dataSource = this.mock.ListaEscolas;
    filteredDataSource: Escola[];
    selectedEscola: Escola;

    openDialog(){
      this.dialog.open(this.dialogRef)
    }

    closeDialog(){
      this.dialog.closeAll();
    }

    filterData(text:string){

    if(text.length >= 3){
      console.log(text)
      this.filteredDataSource = this.dataSource;
      this.filteredDataSource = this.filteredDataSource.filter(x => x.nome.toUpperCase().includes(text.toUpperCase()))

    } else{
      this.filteredDataSource = this.dataSource;
      return false
    }

  }


  selectEscola(codregistro: string){
    
    this.selectedEscola = this.dataSource.find(x => x.codregistro == codregistro)
    console.log(this.dataSource)
    this.frmCadastro.patchValue({"codregistro":this.selectedEscola.codregistro,
                                 "nome":this.selectedEscola.nome})
  }

  Validate(){
    this.frmCadastro = this.fb.group({
      codregistro: [{value: '', disabled: true},[Validators.required]],
      nome: [{value: '', disabled: true},[Validators.required]],
      disciplina: ['',[Validators.required]],
      horario: ['',[Validators.required]],
    })
  }

  ngOnInit() {

    this.Validate();
    this.dataSource = this.mock.ListaEscolas;
    this.filteredDataSource = this.dataSource;

  }

}
