import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:"lcss-chapter-07",
  template:`
  <div class="body">
    <header><h1>CSS lists</h1></header>
    <main>
      <article>
        <h2>Ordered List</h2>
        <ol start="3" reversed>
          <li>Step One</li>
          <li value="10">Step Two</li>
          <li>Step Three</li>
        </ol>
      </article>
      <article>
        <h2>Unordered List</h2>
        <ul>
          <li>Step One</li>
          <li>Step Two</li>
          <li>Step Three</li>
        </ul>
      </article>
    </main>
  </div>
  `,
  styles:`
  ol {
    list-style-type: upper-roman;
  }
  ul {
    list-style-type: square;
    line-height: 1.6;
    text-align: center;
    list-style-position: outside;
  }
  ul li:nth-child(2) {
    color: red;
  }
  ul ::marker {
    color: red;
    font-family: fantasy;
    content: "xyz)" /* At this place we can also put font-awesome icons etc */
  }
  `
})
export class Chapter07Component{}
