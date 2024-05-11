import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:"lcss-chapter-11",
  template:`
  <section class="columns">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis exercitationem soluta ducimus sed facere impedit distinctio ipsum? Consectetur, quibusdam?</p>
    <p>Quis consequuntur distinctio beatae dolor? Sint voluptatum nulla repellendus quas voluptates accusantium, blanditiis saepe molestias exercitationem optio distinctio magnam inventore?</p>
    <!-- <h2>Next Topic</h2> -->
    <p class="quote">&#8220;Where's my rug, man?&#8221;<span class="nowrap">&#8212; The dude</span></p>
    <p>Repudiandae blanditiis excepturi placeat, numquam accusantium debitis dolore sint enim dignissimos iste odit laboriosam, voluptate possimus soluta magnam quod? Deserunt.</p>
    <p>Sed, reprehenderit. Animi atque sunt reprehenderit illo est accusantium ex expedita. Qui provident expedita veritatis aliquid exercitationem. Facilis, et quas!</p>
  </section>
  <p>Dolor neque qui incidunt quam delectus, placeat magni facere ullam nulla assumenda obcaecati asperiores fuga perspiciatis praesentium atque reiciendis necessitatibus!</p>
  `,
  styles:`
  .columns {
    /*
    column-count: 4;
    column-width: 250px;
    The line columns:4 250px; is the same as above.
    */
    columns: 4 250px;
    column-rule: 3px solid #333;
    column-gap: 3rem;
  }
  .columns p {
    margin-top: 0;
  }
  .columns h2 {
    margin-top: 0;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    break-inside: avoid;
  }
  .columns .quote {
    margin-top: 2rem;
    font-size: 3rem;
    text-align: center;
    color: #333;
    column-span: all;
  }
  .nowrap {
    white-space: nowrap;
  }
  `
})
export class Chapter11Component{}
