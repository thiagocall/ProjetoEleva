import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './initial/login/login.component';
import { CadastrarEscolaComponent} from  './escola/cadastrar/cadastrar.component';
import { ConsultarEscolaComponent } from './escola/consultar/consultar.component';
import { DetalhesComponent } from './escola/detalhes/detalhes.component';
import { CadastrarTurmaComponent } from './turma/cadastrar/cadastrar.component';
import { ConsultarTurmaComponent } from './turma/consultar/consultar.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'escola/cadastrar', component: CadastrarEscolaComponent},
  {path: 'escola/consultar', component: ConsultarEscolaComponent},
  {path: 'escola/:codregistro/detalhes',component: DetalhesComponent},
  {path: 'turma/cadastrar',component: CadastrarTurmaComponent},
  {path: 'turma/consultar', component: ConsultarTurmaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
