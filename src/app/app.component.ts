import { Component } from '@angular/core';

import {NameFactComponent} from './components/name-fact/name-fact.component';

@Component({
  selector: 'app-root',
  imports: [NameFactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'namefacts';

  constructor(){
    console.log('App loaded')
  }
}
