import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Escola } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

constructor(private http: HttpClient) { }

baseUrl = environment.apiUrl;

getEscolas():Observable<any>{
  return this.http.get(`${this.baseUrl}escola`)
}

postEscolas(escola:Escola){
    return this.http.post(`${this.baseUrl}escola`,escola)
}

deleteEscolas(id:string){
  return this.http.delete(`${this.baseUrl}escola/${id}`)
}

}
