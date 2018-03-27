import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { TabelaService } from './tabela/tabela.service';
import { TabelaModule } from './tabela/tabela.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabelaModule,
    HttpModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  providers: [TabelaService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
