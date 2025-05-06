import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField} from '@angular/material/input';
import { MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-name-fact',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatLabel],
  templateUrl: './name-fact.component.html',
  styleUrl: './name-fact.component.css'
})
export class NameFactComponent {

}
