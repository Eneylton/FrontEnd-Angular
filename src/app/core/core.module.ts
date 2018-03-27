import { RouterModule } from '@angular/router';
import { CadastroService } from './../cadastro/cadastro.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';

import { ErrorHandlerService } from './error-handler.service';


import { TabelaService } from '../tabela/tabela.service';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [],
  exports: [

    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [TabelaService,
    CadastroService,
    ConfirmationService,
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class CoreModule { }
