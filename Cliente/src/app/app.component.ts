import { Component } from '@angular/core';
import { paginas } from './const/paginas';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public get Paginas() {
    return paginas;
  }

  constructor() { }
}
