import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:"lcss-chapter-14",
  template:`
  <div class="grid-container">
    <header class="header el"><h1>Header</h1></header>
    <main class="container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
    </main>
    <aside class="sidebar el"><h2>Sidebar</h2></aside>
    <footer class="footer el"><h2>Footer</h2></footer>
  </div>
  `,
  styleUrl:'./chapter-14.component.css'
})
export class Chapter14Component{}
