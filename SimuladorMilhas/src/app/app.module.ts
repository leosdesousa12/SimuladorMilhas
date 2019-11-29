import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { ReactiveFormsModule } from '@angular/forms';  //<<<< import it here
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PontosPeriodoComponent } from './pontos-periodo/pontos-periodo.component';
import { PontosPorGastoComponent } from './pontos-por-gasto/pontos-por-gasto.component';
import { PontosAcumuladosPeriodoComponent } from './pontos-acumulados-periodo/pontos-acumulados-periodo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PontosPeriodoComponent,
    PontosPorGastoComponent,
    PontosAcumuladosPeriodoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
