import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-gasto-por-ponto',
  templateUrl: './gasto-por-ponto.component.html',
  styleUrls: ['./gasto-por-ponto.component.css']
})
export class GastoPorPontoComponent implements OnInit {

  @Input() cartao;

  constructor() { }

  ngOnInit() {
    console.log(this.cartao);
  }

}
