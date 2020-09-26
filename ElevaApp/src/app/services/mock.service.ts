import { Injectable } from '@angular/core';

export interface Escola{
      codregistro: string;
      nome: string;
      endereco: string;
      numero: number;
      bairro: string;
      cep: number;
      cidade: string;
      coduf: string;
      responsavel: string;
      email: string;
}

const ESCOLAS: Escola[] =[
  {codregistro: '01.01.001', bairro: 'Abolição', endereco: 'Rua São José', nome: 'Escola Municipal João Gullart', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.002', bairro: 'Méier', endereco: 'Rua Arquias Cordeiro', nome: 'Escola Municipal Republica do Peru', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'luiz@escola.com.br', numero: 180, responsavel:'Luiz Sergio' },
  {codregistro: '01.01.003', bairro: 'Todos os Santos', endereco: 'Rua Santos Titara', nome: 'Escola Municipal Acre', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'elizabeth@escola.com.br', numero: 150, responsavel:'Elizabeth Mendes' },
  {codregistro: '01.01.004', bairro: 'Pilares', endereco: 'Rua Pereira Nunes', nome: 'Escola Municipal Tagore', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'augusto@escola.com.br', numero: 87, responsavel:'Augosto José' },
  {codregistro: '01.01.005', bairro: 'Engenho de Dentro', endereco: 'Rua Jose dos Reis', nome: 'Escola Municipal Bolivar', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'mario@escola.com.br', numero: 390, responsavel:'Mario Silva' }

]

@Injectable({
  providedIn: 'root'
})
export class MockService {

ListaEscolas = ESCOLAS;
constructor() { }

}
