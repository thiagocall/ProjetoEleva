import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) { }
  
  baseUrl = environment.apiUrl;

  getTurmas(id){
      return this.http.get(`${this.baseUrl}turma/${id}`)
  }

  getTurma(id){
    return this.http.get(`${this.baseUrl}turma/${id}`)
}

  postTurma(turma){
  return this.http.post(`${this.baseUrl}turma`,turma)
}

deleteTurma(id){
  return this.http.delete(`${this.baseUrl}turma/${id}`)

}


}
