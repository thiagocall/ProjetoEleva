import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private router:Router, 
              public route: ActivatedRoute,
              private mock: MockService) { }

  data;

  get Escola() {
    return this.mock.ListaEscolas.find(x => x.codregistro == this.data)
  }

  ngOnInit() {

    this.data = this.route.snapshot.paramMap.get("codregistro");
    console.log(this.data)

  }

}
