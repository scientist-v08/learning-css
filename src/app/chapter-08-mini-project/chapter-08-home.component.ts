import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone:true,
  imports:[RouterLink],
  selector:"lcss-chapter-08-home",
  template:`
  <nav>
    <h2>CSS Menu</h2>
    <ul>
      <li><a [routerLink]="['/nav-page01']">Appetizers</a></li>
      <li><a [routerLink]="['/nav-page02']">Entrees</a></li>
      <li><a [routerLink]="['/nav-page01']">Desserts</a></li>
      <li><a [routerLink]="['/nav-page02']">Beverages</a></li>
      <li><a [routerLink]="['/nav-page01']">About</a></li>
    </ul>
  </nav>
  <p>Learn more about <a href="https://edition.cnn.com/travel/article/world-best-food-dishes/index.html" target="_blank">Amazing foods</a></p>
  `,
  styles:`
  nav{
    border: 2px solid #333;
    border-radius: 2rem;
    margin: 0 auto 1rem; /* If we set the middle element to auto the right and left gets set and it centers the given element */
    max-width: 45%;
    font-size: 3rem;
    line-height: 7rem;
    ul {
      list-style-type: none;
    }
    h2 {
      padding: 1rem;
      background: gold;
      border-radius: 2rem 2rem 0 0;
    }
    li {
      border-top: 1px solid #333;
    }
    li a{
      display: block;
    }
    li a, li a:visited {
      text-decoration: none;
      color: #333;
    }
    li a:hover, li a:focus{
      background: #333;
      color: whitesmoke;
    }
    li:last-child a{
      border-radius: 0 0 2rem 2rem;
    }
  }
  `
})
export class Chapter08HomeComponent{}
