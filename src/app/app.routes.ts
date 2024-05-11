import { Routes } from "@angular/router";
// import { Chapter06HomeComponent } from "./chapter-06-css-links/chapter-06-home.component";
import { Chapter06Route01Component } from "./chapter-06-css-links/chapter-06-route-01.component";
import { Chapter06Route02Component } from "./chapter-06-css-links/chapter-06-route-02.component";
import { Chapter08HomeComponent } from "./chapter-08-mini-project/chapter-08-home.component";
import { Chapter08Route01Component } from "./chapter-08-mini-project/chapter-08-router-01.component";
import { Chapter08Route02Component } from "./chapter-08-mini-project/chapter-08-router-02.component";

export const routes: Routes = [
  // {
  //   path:'',
  //   component: Chapter06HomeComponent
  // },
  {
    path:'page01',
    component: Chapter06Route01Component
  },
  {
    path:'page02',
    component: Chapter06Route02Component
  },
  {
    path:'',
    component: Chapter08HomeComponent
  },
  {
    path:'nav-page01',
    component: Chapter08Route01Component
  },
  {
    path:'nav-page02',
    component: Chapter08Route02Component
  }
];
