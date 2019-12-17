import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-gasto-por-ponto',
  templateUrl: './gasto-por-ponto.component.html',
  styleUrls: ['./gasto-por-ponto.component.css']
})
export class GastoPorPontoComponent implements OnInit {

  @Input() cartao;
  @Input() dolar;


  constructor() { }
  primeiraTela = {pontos:0 , meses:0, custo:0.00};
  myFunction(){
    if(this.primeiraTela.pontos == 0 || this.primeiraTela.meses == 0){
      this.primeiraTela.custo = 0.0;
      }else{
          this.primeiraTela.custo = (((this.primeiraTela.pontos/this.primeiraTela.meses)/this.cartao.valPonto) * this.dolar);
      }
  }
  ngOnInit() {
    this.atualiza_inputs();
  }
  
  atualiza_inputs() {
    const source = timer(100, 300);
    const abc = source.subscribe(val => {
      this.myFunction();

    });
  }
}
