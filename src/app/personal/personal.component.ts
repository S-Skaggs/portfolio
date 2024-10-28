export interface Photograph {
  src: string;
  alt: string;
  caption: string;
}

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
        <img src="pictures/sheldon/photographing-you.jpeg" alt="Sheldon taking a picture of you" />
        <p>Let me say up front, I am no expert at photography. It is something I really enjoy, it literally gives me a different perspective on the world around me.</p>
        <p>It does not matter if it is with my Canon Rebel or with my phone, if I see something that speaks to me, I am going to shoot it.</p>
      </article>

      <article class="flex-item">
        <h2>Hiking</h2>
        <img src="pictures/hiking/PilotMountain_11132021.jpg" alt="near the summit of Pilot Mountain 2021" />
        <p>Living in North Carolina puts us in a great location for hiking and exploring. With the Great Smoky Mountains just a couple of hours away, and the beach a few more, we can explore quite a bit. Not to mention the nearby states with their parks.</p>
        <p>We do have one family tradition related to hiking. Sometime in early to mid October we will go to Hendersonville to get our pumpkins, some tasty treats, and food for our picnic. We will then drive up the Blue Ridge Parkway to make our way towards the Graveyard Trail. Just before this trail we will stop and have our picnic. Then we spend some time hiking around the Graveyard Trail and its upper and lower falls. It is a great way to spend a day.</p>
      </article>

      <article class="flex-item">
        <h2>Golf</h2>
        <img src="pictures/golf/FamilyGolfTanglewoodExec-08192023-sm.jpeg" alt="me and my family at the Tanglewood Executive golf course" />
        <p>I got started very late in life for golf, I was 49 almost 50 years old. It is a great sport that anyone can play. In fact I was able to get my whole family into it.</p>

        <div class="grid">
          <img class="lower-image" src="pictures/golf/ScottCountyParkGolf_07022023-sm.jpg" alt="me and my wife at Scott County Park golf course" />

          <div>
            <p>I have not "broken" 100 yet, meaning it takes me 100 or more strokes to play 18 holes. I am close, averaging around 104. I just enjoy being with friends, family, and outdoors.</p>
            <p>While I always had a passing interest in playing golf I never really tried. It helped that when my son was in middle school he played golf, and eventually my buddy AJ transferred to the Charlotte office.</p>
          </div>
        </div>
      </article>

      <article class="flex-item">
        <h2>Blogging</h2>
        <p>A long time ago I first started a blog as kind of an e-brain, a place I could make notes of things I encountered at work. This would allow me to quickly find things that I knew I had done before but forgot how or why.</p>
        <p>It turns out I really enjoyed it, so I changed the blog's name and made it about my adventures at work. Over the years though I have had less things to write about, so it has kind of lingered.</p>
        <p>I recently started a blog about golfing with a focus on someone who is thinking about starting it. Again though with my schedule I have not been able to be very active with it.</p>
        <p>I plan to revamp both blogs and be a bit more active. It is something I enjoy when I have the time.</p>
        <ul>
          <li><a href="https://sheldons.wordpress.com" target="_blank">sheldons.wordpress.com</a> was my original, I plan to make it a jump-off point for the other two blogs</li>
          <li><a href="https://sheldongolfs.wordpress.com" target="_blank">sheldongolfs.wordpress.com</a> is the home for my golf related blog</li>
          <li><a href="https://sheldoncodes.wordpress.com" target="_blank">sheldoncodes.wordpress.com</a> is the future site for my tech blog</li>
        </ul>
        <p>Another perk about blogging, it allows me to repurpose some of my photographs. While they are currently not displayed in sheldoncodes as part of the listing, you can see them when you view a post or if you use sheldons.</p>
      </article>
    </div>

    <br />

    <h1>Some of My Photographs</h1>
    <div class="gallery-container">
      @for(photograph of this.photographs; track photograph) {
        <figure>
          <img src="{{ photograph.src }}" alt="{{ photograph.alt }}" />
          <figcaption>{{ photograph.caption }}</figcaption>
        </figure>
      }
    </div>
  `,
  styles: `
    *:has(+ img) {
      margin-bottom: .4rem;
    }

    p:has(+ ul) {
      margin-bottom: .3rem;
    }

    article {
      border: solid 1px #05e0e9;
      padding: 0 .5rem;
      height: 40rem;
      overflow-y: auto;
    }

    article h2 {
      text-align: center;
    }

    img {
      margin-left: auto;
      margin-right: auto;
    }

    figure {
      position: relative;
      margin: .3rem auto 1.2rem auto;
    }

    figcaption {
      position: absolute;
      bottom: 0;
      background: rgba(102, 102, 255, 0.5);
      color: #fff;
      width: 100%;
      padding: .2rem;
      text-align: center;
      font-family: "DM Mono", monospace;
      font-size: .9em;
      font-weight: bold;
      border-radius: 8px;
    }

    .flex-container {
      margin-top: 1rem;
    }

    .gallery-container {
      margin: 0 auto;
      max-width: 500px;
    }

    /* Media query for large tablet viewport */
    @media screen and (min-width: 1024px) {
      figcaption {
        padding: .5rem;
      }

      .lower-image {
        margin: 0;
        margin-top: 1.5rem;
      }

      .gallery-container {
        max-width: 800px;
      }
    }

    /* Media query for large laptop viewport */
    @media screen and (min-width: 1440px) {
      .gallery-container {
        max-width: 1000px;
      }
    }

    /* Media query for 4k viewport */
    @media screen and (min-width: 2500px) {
      .gallery-container {
        max-width: 100%;
      }
    }
  `
})
export class PersonalComponent {
  photographs: Photograph[] = [];

  constructor() {
    this.photographs = [
      { src: 'pictures/moon/MoonCarolinaBeach_05202024-sm.jpg', alt: 'a picture of the moon', caption: 'The moon, captured with my phone' },
      { src: 'pictures/moon/Blood-Wolf-Moon-2019.jpg', alt: 'a picture of the 2019 blood wolf moon', caption: 'The 2019 blood wolf moon, captured with my Canon Rebel' },
      { src: 'pictures/wildlife/AtlanticBeach-Dolphin-2023.jpg', alt: 'a picture of dolphin', caption: 'A dolphin, captured with my Canon Rebel' },
      { src: 'pictures/wildlife/HummingbirdMoth-2011.jpg', alt: 'a picture of a hummingbird moth', caption: 'A hummingbird moth, captured with my old Canon Rebel' },
      { src: 'pictures/wildlife/Pensacola-BaldEagle-2024.jpg', alt: 'a picture of a bald eagle', caption: 'A bald eagle, captured with my Canon Rebel' },
      { src: 'pictures/wildlife/Pensacola-Pelican-2022.jpg', alt: 'a picture of a pelican in flight', caption: 'A pelican in flight, captured with my Canon Rebel' },
      { src: 'pictures/wildlife/Pensacola-Pelican-2024.jpg', alt: 'a picture of a pelican on a pier', caption: 'A pelican on a pier taken by my son using my Canon Rebel' },
      { src: 'pictures/wildlife/Pensacola-SeaGull-2022.jpg', alt: 'a picture of a seagull in flight', caption: 'A seagull in flight, captured with my Canon Rebel' },
      { src: 'pictures/wildlife/Pensacola-GreatBlueHeron-2024.jpg',  alt: 'a picture of a great blue heron', caption: 'A great blue heron taken by my son using my Canon Rebel' },
      { src: 'pictures/hiking/Cherokee-Turnpike.jpg', alt: 'a picture of a valley covered in clouds', caption: 'Looking down into a cloud covered valley from the Cherokee Turnpike, captured with my Canon Rebel' },
      { src: 'pictures/hiking/CherohalaSkyway-2022.jpg', alt: 'a picture of mountains in the fall', caption: 'Fall on the Cherohala Skyway, captured with my Canon Rebel' },
      { src: 'pictures/hiking/FallSnow-TN-2023.jpg', alt: 'a snow in the fall in Tennessee', caption: 'One Fall heading to Gatlinburg, TN, we ran into some snow, captured with my Canon Rebel' },
      { src: 'pictures/beaches/BlueAngels_Practice-2022.jpg', alt: 'the blue angels in diamond formation', caption: 'The Blue Angels practicing, captured with my Canon Rebel' },
      { src: 'pictures/beaches/BlueAngels_09112022.jpg', alt: 'the blue angels flying over a beach', caption: 'The Blue Angels returning to Pensacola, captured with my phone' },
      { src: 'pictures/beaches/CarolinaBeach-09132020.jpg', alt: 'a beach at dusk', caption: 'Carolina Beach at dusk, captured with my phone' },
      { src: 'pictures/beaches/Pensacola_08062022.jpg', alt: 'sunrise over a beach', caption: 'Sunrise over Pensacola, captured with my phone' },
      { src: 'pictures/beaches/Pensacola_09152022.jpg', alt: 'sunset behind th remains of a pier', caption: 'Sunset behind the remains of a pier in Pensacola, captured with my phone' },
    ];
  }
}
