import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone:true,
  imports:[NgOptimizedImage],
  selector:'lcss-chapter-17',
  template:`

  <div class="container">
    <header>
      <h1>Our Staff</h1>
      <nav>
        <a href="#profile1">Joe</a>
        <a href="#profile2">Matt</a>
        <a href="#profile3">Jane</a>
      </nav>
    </header>

    <main>
      <article
        id="profile1"
        class="card"
      >
        <figure>
          <img
            ngSrc="../../assets/profile1-500x500.png"
            alt="Joe Coder"
            width="500"
            height="500"
          >
          <figcaption>Joe Coder</figcaption>
        </figure>
        <p><q>I code stuff</q></p>
      </article>
      <article
        id="profile2"
        class="card"
      >
        <figure>
          <img
            ngSrc="../../assets/profile2-500x500.png"
            alt="Matt Designer"
            width="500"
            height="500"
          >
          <figcaption>Matt Designer</figcaption>
        </figure>
        <p><q>I design stuff</q></p>
      </article>
      <article
        id="profile3"
        class="card"
      >
        <figure>
          <img
            ngSrc="../../assets/profile3-500x500.png"
            alt="Jane Dev Rel"
            width="500"
            height="500"
          >
          <figcaption>Jane <span class="nowrap">Dev Rel</span></figcaption>
        </figure>
        <p><q>I teach stuff</q></p>
      </article>
    </main>

    <footer>
      <p>&copy; Acme Co.</p>
    </footer>
  </div>

  `,
  styleUrl:'./chapter-17.component.css'
})
export class Chapter17Component{}
