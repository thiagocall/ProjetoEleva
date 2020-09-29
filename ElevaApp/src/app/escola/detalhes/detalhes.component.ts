import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private router:Router, 
              public route: ActivatedRoute,
              public escolaServ: EscolaService) { }

  Escola;

  getEscola(reg) {

    console.log(reg)
    
    try {
      this.escolaServ.getEscola(reg).subscribe(
        res =>{
          this.Escola = res;
        }, err =>{
          this.Escola = null;
        }
      )
      
    } catch {
      this.Escola = null;
    }

  }

  ngOnInit() {

    ;
    this.getEscola(this.route.snapshot.paramMap.get("codregistro"));

  }

}
