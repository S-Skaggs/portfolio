import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found-container">
      <img src="/pictures/sheldon/thinking.jpg" alt="sheldon looking thoughtfully at the top of Brasstown Bald" />
      <div class="not-found-text">
        <h2>Hmmm...</h2>
        <p>I think you might be lost.</p>
        <p>Please use one of the links in the navigation menu to find your way.</p>
      </div>
    </div>
  `,
  styles: `
    img {
      border-radius: 0;
      width: 100%;
    }

    h2 {
      text-align: center;
    }

    .not-found-container {
      position: relative;
      text-align: left;
      color: #ffffff;
    }

    .not-found-text {
      position: absolute;
      top: 20px;
      left: 10px;
      padding: 5px;
      background-color: rgba(121, 112, 118, .5);
    }
  `
})
export class NotFoundComponent {

}
