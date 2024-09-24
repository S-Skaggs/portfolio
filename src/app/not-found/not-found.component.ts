import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found-container">
      <img src="/pictures/sheldon/thinking_2500.jpg" class="tablet-desktop" alt="sheldon looking thoughtfully at the top of Brasstown Bald" />
      <img src="/pictures/sheldon/thinking_small.jpg" class="mobile" alt="sheldon looking thoughtfully at the top of Brasstown Bald" />
      <div class="not-found-text">
        <h2>Hmmm...</h2>
        <p>I think you might be lost.</p>
        <p>Please use one of the links in the navigation menu to find your way.</p>
      </div>
    </div>
  `,
  styles: `
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
      top: 5px;
      padding-left: 5px;
      padding-right: 5px;
      background-color: rgba(121, 112, 118, .5);
      border-radius: 10px;
    }

    /* Media query for tablet viewport */
    @media screen and (min-width: 630px) {
      .not-found-text {
        top: 20px;
        left: 20px;
      }
    }
  `
})
export class NotFoundComponent {

}
