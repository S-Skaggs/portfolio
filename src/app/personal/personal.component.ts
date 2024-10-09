import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to My Personal Page!</h1>

    <div class="grid">
      <section class="mobile">
        <img class="center-image" src="pictures/sheldon/HelenGA_sm.jpg" alt="a picture of sheldon in a German restaurant" />
      </section>
      <section>
        <p class="dropCap">I created this page to share some information about myself beyond my resume.</p>
        <p>Some activities I enjoy include:</p>
        <ul>
          <li>Reading</li>
          <li>Photography</li>
          <li>Hiking</li>
          <li>Golf</li>
          <li>Blogging</li>
        </ul>
      </section>
      <section class="tablet-desktop">
        <img src="pictures/sheldon/HelenGA_sm.jpg" alt="a picture of sheldon in a German restaurant" />
      </section>
    </div>

    <div class="flex-container">
      <article class="flex-item">
        <h2>Reading</h2>
        <p>When I first developed an affinity to reading, I preferred the science fiction and fantasy genres. As I grew older my tastes expanded into mystery and history. As a developer I also try to be a life long learner, so I have to add technical books into the mix.</p>

        <p>A neat resource I found, that integrates with my Kindle account, is called <a href="https://www.goodreads.com/" target="_blank">goodreads</a>. It is like a social network for book readers. You can leave reviews, share quotes, and progress of the books you are reading. You can indicate books you would like to read, and of course books you have read. They even have giveaways from time to time. Like any social network it does require some maintenance, which I have been neglecting lately.</p>

        <p>If you would like to connect on that site, you can find my profile with <a href="https://www.goodreads.com/user/show/10868272-sheldon" target="_blank">this link</a>.</p>
      </article>

      <article class="flex-item">
        <h2>Photography</h2>
        <img class="center-image" src="pictures/sheldon/photographing-you.jpeg" alt="Sheldon taking a picture of you" />
        <p>Let me say up front, I am no expert at photography. It is something I really enjoy, it literally gives me a different perspective on the world around me. I don't care if it is with my Canon Rebel or with my phone, if I see something that speaks to me, I am going to shoot it.</p>
      </article>

      <article class="flex-item">
        <h2>Hiking</h2>
        <img class="center-image" src="pictures/hiking/PilotMountain_11132021.jpg" alt="near the summit of Pilot Mountain 2021" />
      </article>

      <article class="flex-item">
        <h2>Golf</h2>
      </article>

      <article class="flex-item">
        <h2>Blogging</h2>
      </article>
    </div>
  `,
  styles: `
    p:has(+ ul) {
      margin-bottom: .3rem;
    }

    article {
      border: solid 1px #05e0e9;
      padding: 0 .5rem;
    }

    article h2 {
      text-align: center;
    }

    .flex-container {
      margin-top: 1rem;
    }

    .center-image {
      margin-left: auto;
      margin-right: auto;
    }
  `
})
export class PersonalComponent {

}
