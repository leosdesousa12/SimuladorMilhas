import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PontosPeriodoComponent } from './pontos-periodo/pontos-periodo.component';
import { PontosPorGastoComponent } from './pontos-por-gasto/pontos-por-gasto.component';
import { PontosAcumuladosPeriodoComponent } from './pontos-acumulados-periodo/pontos-acumulados-periodo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PontosPeriodoComponent,
    PontosPorGastoComponent,
    PontosAcumuladosPeriodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
