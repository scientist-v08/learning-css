import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports:[RouterOutlet],
  selector:"lcss-chapter-06",
  template:`
  <div class="body">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Chapter06Component{}
