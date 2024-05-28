import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:'lcss-chapter-16',
  template:`

  <div class="container">
    <header>
      <h1>Header</h1>
      <nav><h2>Nav</h2></nav>
    </header>

    <main>
      <h2>Main</h2>
    </main>

    <footer>
      <h2>Footer</h2>
    </footer>
  </div>

  `,
  styleUrl:'./chapter-16.component.css'
})
export class Chapter16Component{}
