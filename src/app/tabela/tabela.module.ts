import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaGridComponent } from './tabela-grid/tabela-grid.component';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ButtonModule,
  ],
  declarations: [TabelaGridComponent],
  exports :[TabelaGridComponent]
})
export class TabelaModule { }
