import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone:true,
  selector:"lcss-chapter-06-home",
  imports:[RouterLink],
  template:`
  <header><h1>CSS Links</h1></header>
  <main>
    <p>Welcome to my home page about <a href="https://www.google.com/search?q=+web+links" target="_blank">cool web links</a></p>
    <p>Actually that isn&apos;t a good search phrase</p>
    <p>Let's search for <a href="https://www.google.com/search?q=hypertext+links" target="_blank">hypertext links</a> instead</p>
    <p>I created one page with info about <a [routerLink]="['/page01']">guitars</a></p>
    <p>I created one page with info about <a [routerLink]="['/page02']">Javascript</a></p>
  </main>
  `,
  styles:`
  a{
    color: #000;
  }
  a:hover, a:focus {
    /*color: dodgerblue;*/
    opacity: 0.6;
  }
  `
})
export class Chapter06HomeComponent{}
