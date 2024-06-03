import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter18Component } from './chapter-18-variables/chapter-18.component';

@Component({
  selector: 'lcss-root',
  standalone: true,
  imports: [
    CommonModule,
    Chapter18Component
  ],
  template: `
  <lcss-chapter-18></lcss-chapter-18>
  `,
})
export class AppComponent {}
