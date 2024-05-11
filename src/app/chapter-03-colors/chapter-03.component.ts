import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'lcss-chapter-03',
  templateUrl: './chapter-03.component.html',
  styleUrl: './chapter-03.component.css'
})
export class Chapter03Component {
  h1:string="css selectors";
  h21:string="Article 1";
  h22:string="Article 2";
  h23:string="Article 3";
}
