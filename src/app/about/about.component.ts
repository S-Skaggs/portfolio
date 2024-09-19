import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h1>What is the deal with this site?</h1>

    <p class="dropCap">This site is a portfolio with several goals:</p>
    <ul>
      <li>Display some of my skills as a developer</li>
      <li>Serve as an online resume</li>
      <li>Allow interested parties to get to know me beyond my work experience</li>
    </ul>

    <p>Please take your time and explore the site and learn something more about me beyond coding. Perhaps we can work
      together on a project.</p>
  `,
  styles: `
    ul {
      padding-left: 20px;
    }
  `
})
export class AboutComponent {

}
