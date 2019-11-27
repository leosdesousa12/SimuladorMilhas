import { Component } from '@angular/core';
import {cartoes} from '../app/cartoes'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartoes = cartoes;
  title = 'Calculadora De Milhas';

}
