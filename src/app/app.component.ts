import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter17Component } from './chapter-17-card-project/chapter-17.component';

@Component({
  selector: 'lcss-root',
  standalone: true,
  imports: [
    CommonModule,
    Chapter17Component
  ],
  template: `
  <lcss-chapter-17></lcss-chapter-17>
  `,
})
export class AppComponent {}
