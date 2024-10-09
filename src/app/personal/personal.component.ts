import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to My Personal Page!</h1>

    <div class="grid">
      <section class="mobile">
        <img src="pictures/sheldon/HelenGA_sm.jpg" alt="a picture of sheldon in a German restaurant" />
      </section>
      <section>
        <p class="dropCap">I created this page to share some information about myself beyond my resume.</p>
        <p>Some of my favorite hobbies include:</p>
        <ul>
          <li>Reading</li>
          <li>Photography</li>
          <li>Hiking</li>
          <li>Golf</li>
          <li>Writing</li>
        </ul>
      </section>
      <section class="tablet-desktop">
        <img src="pictures/sheldon/HelenGA_sm.jpg" alt="a picture of sheldon in a German restaurant" />
      </section>

      <div class="flex-container">
        <article>
          <h2>Reading</h2>
        </article>
        <article>
          <h2>Photography</h2>
        </article>
      </div>
    </div>
  `,
  styles: `
    p:has(+ ul) {
      margin-bottom: .3rem;
    }
  `
})
export class PersonalComponent {

}
