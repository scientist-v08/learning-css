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
  <section class="hero">
    <figure class="profile-pic-figure">
      
    </figure>
  </section>
  `,
  styleUrl:'./chapter-15.component.css'
})
export class Chapter15Component{}
