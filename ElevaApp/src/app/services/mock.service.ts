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
  {codregistro: '01.01.001', bairro: 'Abolição', endereco: 'Rua São José', nome: 'Escola Municipal João Gullart', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.002', bairro: 'Méier', endereco: 'Rua Arquias Cordeiro', nome: 'Escola Municipal Republica do Peru', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 180, responsavel:'João Roberto' },
  {codregistro: '01.01.003', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.004', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.005', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.006', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.007', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.008', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.009', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.010', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.011', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.012', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },
  {codregistro: '01.01.013', bairro: 'Cachambi', endereco: 'Rua Cisne Maia', nome: 'Escola Municipal Maria Rita', cep: 20001001, cidade: 'Rio de Janeiro', coduf: 'RJ', email: 'Joao@escola.com.br', numero: 200, responsavel:'João Roberto' },

]

@Injectable({
  providedIn: 'root'
})
export class MockService {

ListaEscolas = ESCOLAS;
constructor() { }

}
