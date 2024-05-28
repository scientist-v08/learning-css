import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter16Component } from './chapter-16-media-queries/chapter-16.component';

@Component({
  selector: 'lcss-root',
  standalone: true,
  imports: [
    CommonModule,
    Chapter16Component
  ],
  template: `
  <lcss-chapter-16></lcss-chapter-16>
  `,
})
export class AppComponent {}
