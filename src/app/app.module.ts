import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';

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
    ToastyModule.forRoot()
  ],
  providers: [TabelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
