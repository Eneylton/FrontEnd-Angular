import { TabelaService } from './../tabela.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabela-grid',
  templateUrl: './tabela-grid.component.html',
  styleUrls: ['./tabela-grid.component.css']
})
export class TabelaGridComponent {

  @Input()  alunos = [];
  @ViewChild('tabela') grid;

  constructor(private tabelaService: TabelaService) { }

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
        this.grid.first = 0;
      });
  }

}
