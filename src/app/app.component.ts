import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter15Component } from './chapter-15-images/chapter-15.component';

@Component({
  selector: 'lcss-root',
  standalone: true,
  imports: [
    CommonModule,
    Chapter15Component
  ],
  template: `
  <lcss-chapter-15></lcss-chapter-15>
  `,
})
export class AppComponent {}
