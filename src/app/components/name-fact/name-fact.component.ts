import {Component, OnInit} from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField} from '@angular/material/input';
import { MatLabel} from '@angular/material/input';
import { NameFactService } from '../../services/name-fact.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-name-fact',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormField, MatLabel, FormsModule, NgIf],
  templateUrl: './name-fact.component.html',
  styleUrl: './name-fact.component.css'
})

export class NameFactComponent implements OnInit {
  name: string = '';
  ageResponse: any;

  constructor(private nameFactService: NameFactService) { }
  ngOnInit() {
    this.getNewAgeStats();
  }

  getNewAgeStats() {
    this.nameFactService.getAgeFromName(this.name).subscribe(data => {
      this.ageResponse = data;
    })
  }

}
