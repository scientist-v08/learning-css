import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:'app-chapter-05',
  template: `
  <div class="body">
    <header>
      <h1>CSS Typography</h1>
    </header>
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat ligula, id eleifend magna.
        Curabitur nisl felis, fermentum ut aliquam ac, consectetur ut enim. Nunc semper non justo sit amet
        tincidunt. Morbi vitae lacus blandit nisl tincidunt iaculis eget in ex. Ut dui nisl, suscipit ut rhoncus
        vel, lobortis in libero. Aliquam erat volutpat. Duis et magna mollis, rhoncus est eu, commodo dui. Mauris
        semper justo id mi iaculis posuere. Suspendisse ac lectus non dolor maximus viverra. In hac habitasse platea dictumst.
      </p>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name">
        <button>Submit</button>
      </form>
    </main>
  </div>
  `,
  styles:`
  .body{
    padding: 13%;
    font-size: 2rem;
    /*font-family: "Times New Roman", Times, serif; First it chooses times new roman. In case it is not available in the browser it chooses times and if that isn't available it chooses serif.*/
    font-family: monospace;
  }
  p{
    text-transform: lowercase;
    text-align: justify;
    line-height: 1.5;
    /*
    letter-spacing: 0.15em;
    word-spacing: 0.1em;
    font-style: italic;
    */
  }
  input,button{
    font: inherit;
  }
  `
})
export class Chapter05Component {}
