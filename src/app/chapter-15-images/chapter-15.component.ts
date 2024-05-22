import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone:true,
  imports:[CommonModule,NgOptimizedImage],
  selector:"lcss-chapter-15",
  template:`
  <!-- <section class="example">
    <img
      ngSrc="../../assets/pat1.png"
      alt="Pattern 1"
      width="200"
      height="200"
    >
  </section> -->
  <!-- <div class="container">
    <section class="hero">
      <figure class="profile-pic-figure">
        <img
          ngSrc="../../assets/profile-800x800.png"
          alt="Profile picture"
          title="Profile picture"
          height="400"
          width="400">
        <figcaption class="offscreen">Jane Doe</figcaption>
      </figure>
      <h1 class="h1">
        <span class="nowrap">Hello 👋</span>
        <span class="nowrap">I'm Jane</span>
      </h1>
    </section>
  </div> -->
  <section class="container2">
    <p class="clip">Jane</p>
  </section>
  `,
  styleUrl:'./chapter-15.component.css'
})
export class Chapter15Component{}
