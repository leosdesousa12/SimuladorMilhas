import {cartoes} from '../app/cartoes'
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { timer } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartoes = cartoes;
  title = 'SIMULADOR DE MILHAS';
  public model: any;

  private REST_API_SERVER = 
  "https://economia.awesomeapi.com.br/jsonp/USDT-BRL/";
  
  constructor(private httpClient: HttpClient) { 

  }

  menu= {op1: false,op2:false,op3:false};
  cont = 0;
  dolar = 0;


  terceiraTela = {pontos:1 , meses:1, custo:0.00};

 

  myFunction_3(){
    //console.log(this.terceiraTela);
    if(this.terceiraTela.custo == 0 || this.terceiraTela.meses == 0){
        this.terceiraTela.pontos =  0;
    }else{
       this.terceiraTela.pontos = ((this.terceiraTela.custo/ this.dolar) * this.model.valPonto) * this.terceiraTela.meses;
  }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : cartoes .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 7))
    )

  formatter = (x: {name: string}) => x.name;
    
  ngOnInit(){
    this.model = "";
    this.dolar = 0;
    //this.getDolar();
    this.oberserableTimer()
    this.atualiza_inputs();
  }
  oberserableTimer() {
    const source = timer(1000, 600000);
    const abc = source.subscribe(val => {
      this.getDolar();
    });

  }

  atualiza_inputs() {
    const source = timer(100, 300);
    const abc = source.subscribe(val => {
      //console.log("chamada ");
      if(this.menu.op1){
        this.title = "Em quantos meses consigo acumular uma quantidade de pontos com um determinado gasto mensal?";
      }


      if(this.menu.op2){
        this.title = "Quanto preciso gastar mensalmente para acumular  pontos durante um determinado período?";
      }

      if(this.menu.op3){
        this.title = "Quantos pontos eu acumulo com um determinado  gasto mensal durante um certo período?";
      }

      if(!this.model){
        this.title = 'SIMULADOR DE MILHAS';
      }
      this.myFunction_3();

    });

  }
  opcoesBotao(op1:boolean,op2:boolean,op3:boolean){
      this.menu.op1 = op1;
      this.menu.op2 = op2;
      this.menu.op3 = op3;
  }

  getDolar() {
    this.sendGetRequest().subscribe((data: any[])=>{
      this.dolar = data[0].ask;

    })  
  }

   sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }




}