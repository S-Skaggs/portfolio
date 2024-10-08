import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to My Projects Page</h1>
    <p class="dropCap">All of the projects I work on at my current employer are internally facing. I do have some repositories in GitHub that I used while obtaining my BS. I also have one project that I wrote for myself to help generate empty files at work for testing.</p>

    <p>While I can not give too many details about the internally facing projects, I will do my best to give you an idea of the technology used. Naturally I do not have any links that I can use for these internally facing projects.</p>

    <div class="projects-container">
      <article class="project-display internal-project">
        <h2>Unified Case Management</h2>
        <p>This is my team's primary focus, and it is internally facing. It is a powerful ticketing and workflow tool that can integrate with other software's APIs. I have been on this project since November 2014, I am not one of the original developers.</p>
        <p>One thing I really like about this project is it's use of generics. While challenging to learn at first, I quickly learned the power of using generics.</p>
        <h3>Technologies</h3>
        <ul>
          <li>.NET Core</li>
          <li>Angular</li>
          <li>SASS</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
      </article>

      <article class="project-display unaffiliated-project">
        <h2>Empty-File-Creator</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/Empty-File-Creator" target="_blank">GitHub Repository</a></li>
        </ul>
        <p>This is a simple console application I created for myself to use at work. At that time I needed to generate different files, even if they were empty, to test the functionality of a third party software.</p>
        <h3>Technologies</h3>
        <ul>
          <li>.NET Core</li>
          <li>C#</li>
        </ul>
      </article>

      <article class="project-display internal-project">
        <h2>LifeLine</h2>
        <p>This is an internally facing project. All telephony providers are required by the US government to have the ability to provide highly discounted service to qualifying applicants. I was given this project in 2015 with the goal of pushing files to and pulling files from the LifeLine Authority. I would then take the files that were retrieved and process them to start work flows for other teams to handle.</p>
        <p>This turned out to be a solution of several console applications. As time has gone by I have been able to leverage third party tools to replace some of the less complex console applications.</p>
        <h3>Technologies</h3>
        <ul>
          <li>.NET</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
      </article>

      <article class="project-display bellevue-project">
        <h2>Biosite</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/biosite" target="_blank">GitHub Repository</a></li>
          <li><a href="https://s-skaggs.github.io/biosite/index.html" target="_blank">GitHub Page</a></li>
        </ul>
        <p>This is one of the first projects I completed while obtaining my BS at Bellevue University. Most of my development work since 2014 has been back-end focused. This means some of my front-end skills started to go out of date. This project is meant to introduce us to HTML5 and CSS3. I <strong>really</strong> enjoyed this class and working on the project. It made me realize how much I missed working on websites, and how much technology has changed.</p>
        <p>Another aspect to this project I enjoyed was using GitHub. I have toyed with GitHub in the past under different user names, but never felt quite comfortable with it compared to Team Foundation Server. I have to admit, I really like using Git and GitHub. Even the fact that you can deploy your website using GitHub Pages, as I did this project, was something I never knew.</p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </article>

      <article class="project-display bellevue-project">
        <h2>Place Holder for Rescue</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/rescue" target="_blank">GitHub Repository</a></li>
        </ul>
        <p></p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </article>

      <article class="project-display bellevue-project">
        <h2>Place Holder for ForwardFitness</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/ForwardFitness" target="_blank">GitHub Repository</a></li>
        </ul>
        <p></p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </article>

      <article class="project-display bellevue-project">
        <h2>Place Holder for Cookbook</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/cookbook" target="_blank">GitHub Repository</a></li>
        </ul>
        <p></p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </article>

      <article class="project-display bellevue-project">
        <h2>Place Holder for in-n-out-books</h2>
        <ul class="link-list">
          <li><a href="https://github.com/S-Skaggs/in-n-out-books" target="_blank">GitHub Repository</a></li>
        </ul>
        <p></p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </article>
    </div>
  `,
  styles: `
    .projects-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .project-display {
      padding: 0 5px 5px;
      text-align: left;
      flex-direction: row;
      box-sizing: border-box;
    }

    .project-display h2 {
      text-align: center;
    }

    .project-display ul {
      list-style-type: none;
      padding-left: 5px;
      margin: 0;
    }

    .project-display li {
      display: inline-block;
      padding: 0px 10px;
      font-family: "DM Mono", monospace;
    }

    .link-list li {
      display: block;
      padding: 0 0;
      font-family: "Sarabun", Verdana, Helvetica, sans-serif;
    }

    .link-list a:hover {
      font-weight: bold;
      cursor: pointer;
    }

    .internal-project {
      border: solid 1px #0271eb;
      box-shadow: none;
    }

    .internal-project h2 {
      border-bottom: solid 1px #0271eb;
    }

    .unaffiliated-project {
      border: solid 1px #40e0d0;
      box-shadow: none;
    }

    .unaffiliated-project h2 {
      border-bottom: solid 1px #40e0d0;
    }

    .bellevue-project {
      border: solid 1px #8601af;
      box-shadow: none;
    }

    .bellevue-project h2 {
      border-bottom: solid 1px #8601af;
    }

    /* Media query for tablet viewport */
    @media screen and (min-width: 630px) {
      .project-display {
        flex-direction: column;
        flex: 0 1 calc(33.333% - 20px);
      }
    }

    /* Media query for laptop viewport */
    @media screen and (min-width: 1024px) {
      .internal-project {
        box-shadow: 5px 5px #0257b2;
      }

      .unaffiliated-project {
        box-shadow: 5px 5px #00ced1;
      }

      .bellevue-project {
        box-shadow: 5px 5px #4b0082;
      }
    }
  `
})
export class ProjectsComponent {

}
