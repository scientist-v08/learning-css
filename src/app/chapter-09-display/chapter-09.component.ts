import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:"lcss-chapter-09",
  template:`
  <div class="body">
    <!-- <main> This is used to understand display:inline-block css
      <p>This is a paragraph</p>
      <p>This is <span class="opposite">another</span> paragraph</p>
    </main> -->
    <main>
      <nav>
        <ul>
          <li><a href="#">Intro</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </nav>
    </main>
  </div>
  `,
  styles:`
  /* This is to understand inline-block
  main {
    background-color: aqua;
    width: 50%;
  }
  p {
    background-color: lightgray;
  }
  .opposite {
    display: inline-block;
    background-color: #333;
    color: whitesmoke;
    margin-top: 100px;
    padding: 4rem;
  }
  */
  div,main,nav,ul,li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0.5rem;
    text-align: right;
    background-color: #000;
  }
  li {
    display: inline-block;
    margin-inline: 0.5rem;
  }
  li a{
    color: #fff;
    text-decoration: none;
  }
  li a:hover, li a:focus{
    text-decoration: underline;
  }
  `
})
export class Chapter09Component{}
