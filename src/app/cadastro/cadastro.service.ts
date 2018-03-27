import { Aluno } from './../core/model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CadastroService {

  alunoUrl = 'http://localhost:8080/alunos';

  constructor(private http: Http) { }

  adicionar(aluno: Aluno): Promise<Aluno> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.alunoUrl,
      JSON.stringify(aluno), { headers })
    .toPromise()
    .then(response => response.json());

}
}