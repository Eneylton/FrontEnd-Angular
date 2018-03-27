import { TabelaService } from './../tabela.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-tabela-grid',
  templateUrl: './tabela-grid.component.html',
  styleUrls: ['./tabela-grid.component.css']
})
export class TabelaGridComponent {

  @Input()  alunos = [];
  @ViewChild('tabela') grid;

  constructor(private tabelaService: TabelaService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.tabelaService.pesquisar()
      .then(alunos => this.alunos = alunos);
  }

  excluir(codigo: number) {
    this.tabelaService.excluir(codigo)
      .then(() => {
        if (this.grid.first === 0){
          this.pesquisar();
        }else{

          this.grid.first = 0;
        }

        this.toasty.success('Aluno excluído com sucesso!');
      });
  }

}
