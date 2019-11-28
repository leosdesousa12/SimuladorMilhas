import {cartoes} from '../app/cartoes'
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartoes = cartoes;
  title = 'Calculadora De Milhas';
  public model: any;

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

}