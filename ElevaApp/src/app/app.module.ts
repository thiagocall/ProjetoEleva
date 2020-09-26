import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatTable } from '@angular/material';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatDividerModule, MatTabsModule } from '@angular/material'
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule, MatCheckboxModule } from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './initial/login/login.component';
import { MatButtonModule } from '@angular/material';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { CadastrarComponent } from './turma/cadastrar/cadastrar.component';
import { ConsultarComponent } from './turma/consultar/consultar.component';
import { ConsultarEscolaComponent } from './escola/consultar/consultar.component'
import { CadastrarEscolaComponent } from './escola/cadastrar/cadastrar.component';
import { ContainerComponent } from './ui/container/container.component';
import { ContainerLgComponent } from './ui/container-lg/container-lg.component';
import { DetalhesComponent } from './escola/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CadastrarComponent,
    ConsultarComponent,
    ConsultarEscolaComponent,
    CadastrarEscolaComponent,
    ContainerComponent,
    ContainerLgComponent,
    DetalhesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-top-right'}),
    MatTableModule,
    MatCheckboxModule,
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
