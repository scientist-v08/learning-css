import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'lcss-chapter-18',
    template: `
    <div class="container">
        <header>
            <h1>Header</h1>
            <nav>
                <h2>Nav</h2>
            </nav>
        </header>
    
        <main>
            <div class="square">
                <p>Hey</p>
            </div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square square--highlight">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
            <div class="square">💻</div>
        </main>
    
        <footer>
            <h2>Footer</h2>
        </footer>
    </div>
    `,
    styleUrl: './chapter-18.component.css'
})
export class Chapter18Component {}
