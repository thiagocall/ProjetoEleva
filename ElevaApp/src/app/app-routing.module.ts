import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './initial/login/login.component';
import { CadastrarEscolaComponent} from  './escola/cadastrar/cadastrar.component';
import { ConsultarEscolaComponent } from './escola/consultar/consultar.component';
import { DetalhesComponent } from './escola/detalhes/detalhes.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'escola/cadastrar', component: CadastrarEscolaComponent},
  {path: 'escola/consultar', component: ConsultarEscolaComponent},
  {path: 'escola/:codregistro/detalhes',component: DetalhesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
