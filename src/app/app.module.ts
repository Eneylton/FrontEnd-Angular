import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { TabelaService } from './tabela/tabela.service';
import { TabelaModule } from './tabela/tabela.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabelaModule,
    HttpModule
  ],
  providers: [TabelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
