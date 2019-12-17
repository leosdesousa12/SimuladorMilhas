import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Input } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-meses-por-ponto',
  templateUrl: './meses-por-ponto.component.html',
  styleUrls: ['./meses-por-ponto.component.css']
})
export class MesesPorPontoComponent implements OnInit {
  @Input() dolar;
  @Input() cartao;
  @Input() title;
  constructor() { }
  segundaTela = {pontos:1 , meses:1, custo: 0.00};
  myFunction_2(){
    if(this.segundaTela.pontos == 0 || this.segundaTela.custo == 0){
      this.segundaTela.meses =  0;

    }else{
      this.segundaTela.meses =  (this.segundaTela.pontos/((this.segundaTela.custo/ this.dolar) * this.cartao.valPonto));
  }
  }
  ngOnInit() {
    this.title = "a";

    this.atualiza_inputs();
  }
  atualiza_inputs() {
    const source = timer(100, 300);
    const abc = source.subscribe(val => {
      //console.log("chamada ");

   
      this.myFunction_2();

    });

  }

}
