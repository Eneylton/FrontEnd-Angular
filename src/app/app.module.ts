import { TabelaGridComponent } from './tabela/tabela-grid/tabela-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { TabelaService } from './tabela/tabela.service';
import { TabelaModule } from './tabela/tabela.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

const routes: Routes = [
  { path: 'alunos', component: TabelaGridComponent },
  { path: 'alunos/:codigo', component: CadastroComponent },
  { path: 'alunos/novo', component: CadastroComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TabelaModule,
    InputTextModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
