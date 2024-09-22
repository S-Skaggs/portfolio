import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to my Portfolio!</h1>

    <div class="grid">
      <section>
        <p class="dropCap">Thank you for finding your way to my portfolio. I am a software engineer with a passion for creating web applications.
        I have experience with C#, SQL, TypeScript, and Angular. I am also familiar with Node.js, Express, and MongoDB.
        I am always looking for new opportunities to learn and grow as a developer. Please feel free to reach out to me if you have
        any questions or would like to work together.</p>

      <p>Please take your time and look around my portfolio. I have included some of my projects and a little bit about myself.</p>
      </section>
      <section>
        <img src="/pictures/sheldon/head.jpg" alt="a picture of sheldon from teh neck up" />
      </section>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
