import { Title } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { CadastroService } from './cadastro.service';
import { Aluno } from './../core/model';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aluno = new Aluno();

  constructor(
    private cadastroService:CadastroService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit() {

    const codigoAluno = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo Aluno');

    if (codigoAluno) {
      this.carregarAluno(codigoAluno);
    }
  }

  get editando() {
    return Boolean(this.aluno.id)
  }

  carregarAluno(codigo: number) {
    this.cadastroService.buscarPorCodigo(codigo)
      .then(aluno => {
        this.aluno = aluno;
      });
  }

  salvar(form: FormControl) {
    this.cadastroService.adicionar(this.aluno);
    form.reset();

    this.toasty.success('Lançamento adicionado com sucesso!');
  }


  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.aluno.nome}`);
  }

}
