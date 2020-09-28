import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EscolaService } from 'src/app/services/escola.service';
import {Escola, MockService} from '../../services/mock.service'

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarEscolaComponent implements OnInit {

  constructor( private mock: MockService,
              private router: Router,
              private escolaServ: EscolaService,
              private toastr: ToastrService) { }

  displayedColumns: string[] = ['codregistro', 'nome', 'endereco', 'numero','bairro','email','actions'];
  dataSource;
  filteredDataSource;

  escolas: any[];

  getEscolas() {
    
    this.escolaServ.getEscolas().subscribe(
      response =>{
        console.log(response);
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

  navig(el){

    this.router.navigate(['escola/' + el.codRegistro + '/detalhes'])
  }

  ngOnInit() {
    this.getEscolas();
    
  }

}
