import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:"lcss-chapter-10",
  template:`
  <div class="body">
    <section>
      <div class="block left">Float</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad, ratione quibusdam iure voluptate facilis harum optio officia repellendus maxime?</p>
    </section>
    <p>Nulla sed dolorem at tenetur libero laboriosam exercitationem voluptatibus magnam tempore. Ad obcaecati eligendi ipsa, dignissimos magnam eum officia voluptatibus.</p>
    <p>Quod provident animi similique, nihil rem numquam laborum magni porro, in eveniet quisquam repellat suscipit tempore exercitationem delectus quo quasi?</p>
    <div class="block right">Float</div>
    <p>Asperiores delectus aut eius quasi, deserunt, vero magni dolores debitis quidem a rerum nemo perspiciatis quia, laudantium quos esse velit!</p>
    <p>Officia deleniti nisi reiciendis molestias ea vel hic neque, doloribus velit est consequatur eius quisquam natus assumenda vero, veritatis doloremque.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa iure odio facilis cumque nihil amet dolor ex dolores voluptates.</p>
    <p>Velit nemo magnam, possimus quia cumque iusto hic esse quo accusamus ullam mollitia est amet quam qui dolores dolore officia.</p>
    <p>Incidunt et quam, minima soluta earum commodi enim officia iure, doloribus omnis sapiente corporis consectetur reprehenderit suscipit quia eius! Nobis.</p>
  </div>
  `,
  styles:`
  .block {
    width: 15vw;
    height: 15vw;
    background-color: #000;
    color: #fff;
    padding: 1rem;
  }
  .left {
    float: left;
    margin-right: 1rem;
  }
  .right {
    float: right;
    margin-left: 1rem;
  }
  section {
    background-color: bisque;
    border: 1px solid #333;
    padding: 1rem;
    display: flow-root;
  }
  `
})
export class Chapter10Component {}
