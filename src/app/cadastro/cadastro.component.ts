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
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
  }


  salvar(form: FormControl) {
    this.cadastroService.adicionar(this.aluno);
    form.reset();

    this.toasty.success('Lançamento adicionado com sucesso!');
  }

}
