import {cartoes} from '../app/cartoes'
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';
import { FormControl ,FormGroup} from '@angular/forms';
import { Pipe } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartoes = cartoes;
  title = 'Calculadora De Milhas';
  public model: any;

  menu= {op1: false,op2:false,op3:false};
  cont = 0;
  primeiraTela = {pontos:0 , meses:0, custo:0.00};

  segundaTela = {pontos:1 , meses:1, custo:0.00};

  myFunction(param: any){
    if(this.primeiraTela.pontos == 0 || this.primeiraTela.meses == 0){
      this.primeiraTela.custo = 0.0;
  }else{
      this.primeiraTela.custo = (((this.primeiraTela.pontos/this.primeiraTela.meses)/this.model.valPonto) * 4.00);
  }
  }
  myFunction_2(param: any){
    console.log(param);
    if(this.segundaTela.pontos == 0 || this.segundaTela.custo == 0){
      this.segundaTela.meses =  0;
      console.log("erado");

    }else{
      this.segundaTela.meses =  (this.segundaTela.pontos/((this.segundaTela.custo/4.00) * this.model.valPonto));
      console.log("meses");
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
    }

  opcoesBotao(op1:boolean,op2:boolean,op3:boolean){
      this.menu.op1 = op1;
      this.menu.op2 = op2;
      this.menu.op3 = op3;
  }


  menu_1 = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : console.log("")
  ))

}