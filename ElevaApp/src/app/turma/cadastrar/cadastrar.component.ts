import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ViewChild, TemplateRef } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

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

    openDialog(){
      this.dialog.open(this.dialogRef)
    }


    closeDialog(){
      this.dialog.closeAll();
    }

    displayedColumns: string[] = ['codregistro', 'nome','actions'];
  dataSource = this.mock.ListaEscolas;
  
  filteredDataSource;


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


  Validate(){
    this.frmCadastro = this.fb.group({
      codregistro: [{value: '', disabled: true},[Validators.required]],
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
    this.dataSource = this.mock.ListaEscolas;
    this.filteredDataSource = this.dataSource;

  }

}
