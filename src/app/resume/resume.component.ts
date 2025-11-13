import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="page-grid-container">
      <section class="resume-section">
        <div class="resume-header center-text">
          <h1>Sheldon Skaggs</h1>
          <h2>Software Engineer IV</h2>
        </div>
        <br />
        <div class="grid">
          <div>
            <h3>Objective</h3>
          </div>
          <div class="resume-section-details">
            <p>To obtain a challenging developer position in a dynamic and innovative organization where I can utilize my technical and creative skills to develop and maintain responsive, user-friendly, and visually appealing websites.</p>
          </div>

          <div class="resume-section-header">
            <h3>Skills &#38; Abilities</h3>
          </div>
          <div>
            <p>Proficient with C#, TypeScript, JavaScript, and SQL languages. Experience in developing and maintaining responsive, user-friendly, and visually appealing websites using modern web development frameworks and tools.</p>
          </div>

          <div class="resume-section-header">
            <h3>Experience</h3>
          </div>
          <div>
            <div class="experience">
              <div class="experience-title">
                <h4>Charter Communications</h4>
                <h4>Software Engineer IV | May 2016 - Present</h4>
              </div>
              <ul>
                <li>Charter Communications acquired Time Warner Cable in May of 2016.</li>
                <li>Support Charter Communications on an Enterprise level.</li>
                <li>Support a regulatory and government program for Charter Communications.</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>Time Warner Cable</h4>
                <h4>Software Engineer | November 2014 - May 2016</h4>
              </div>
              <ul>
                <li>Charter Communications acquired Time Warner Cable in May of 2016.</li>
                <li>Supported Time Warner Cable on an Enterprise and Regional level with the development of web-based solutions in a team environment.</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>Time Warner Cable</h4>
                <h4>Web Developer | September 2000 - November 2014</h4>
              </div>
              <ul>
                <li>Maintained Time Warner Cable's Around Carolina website with a focus on broadband content.</li>
                <li>Maintained divisional level Intranet.</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>Time Warner Cable</h4>
                <h4>Product Support Specialist | December 1998 - September 2000</h4>
              </div>
              <ul>
                <li>Provided phone support for Road Runner High Speed Internet product.</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>Nestle Corporation</h4>
                <h4>Maintenance Mechanic | June 1997 - December 1998</h4>
              </div>
              <ul>
                <li>Responsible for the maintenance, changeover, and repair of production line machines</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>General Physics Corporation</h4>
                <h4>Mechanical Maintenance Instructor | June 1996 - March 1997</h4>
              </div>
              <ul>
                <li>Trained mechanical maintenance procedures, troubleshooting, and hydraulic fundamentals both in a classroom and hands-on environment</li>
                <li>Supervised student laboratory exercises for quality and workmanship.</li>
              </ul>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>United States Navy</h4>
                <h4>Nuclear Field Machinist Mate | May 1990 - May 1996</h4>
              </div>
              <ul>
                <li>Responsible for preventative maintenance and corrective maintenance of reactor and steam plant pumps, valves and auxiliary equipment.</li>
                <li>Supervised watch personal as Engine Room Supervisor on USS Virginia (CGN-38)</li>
              </ul>
            </div>
          </div>

          <div class="resume-section-header">
            <h3>Education</h3>
          </div>
          <div>
            <div class="experience">
              <div class="experience-title">
                <h4>Bellevue University</h4>
                <h4>Bellevue, NE | BS in Web Development</h4>
              </div>
              <p>Earned a 3.8 GPA and completed relevant coursework in full-stack web development including front-end web design and coding with the back-end server scripting and database skills.</p>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>Gaston Community College</h4>
                <h4>Dallas, NC | AS in Computer Programming</h4>
              </div>
              <p>Graduated with high honors May 1998</p>
            </div>

            <div class="experience">
              <div class="experience-title">
                <h4>US Navy Schools</h4>
                <h4>Orlando, FL</h4>
              </div>
              <p>Nuclear Field A School (360 hours) Naval Nuclear Power School (600 Hours); Basic Nuclear Engineering; Fire Fighting School; Basic Engineering Division Qualifications; Advanced Damage Control; Chemical, Biological, and Radiological Defense.</p>
            </div>
          </div>

          <div class="resume-section-header">
            <h3>Communication</h3>
          </div>
          <div>
            <p>Excellent communication skills enable me to collaborate with clients, stakeholders, and cross-functional teams to deliver high-quality results.</p>
          </div>

          <div class="resume-section-header">
            <h3>Leadership</h3>
          </div>
          <div>
            <p>Mentor junior developers, interns, coordinate project tasks, and implement best practices to ensure timely delivery of high-quality web applications.</p>
          </div>
        </div>
      </section>
      <aside class="tablet-desktop resume-actions center-text">
        <p><a href="documents/SheldonSResume.pdf" target="_blank">PDF Version</a></p>
      </aside>
    </div>
  `,
  styles: `
    .grid {
      grid-auto-flow: row;
    }

    h1 {
      font-family: "Crimson Text", Georgia, serif;
      font-size: 2.5rem;
    }

    .resume-header {
      border-bottom: solid 1px #808080;
    }

    .resume-section-header {
      border-top: solid 1px #a9a9a9;
    }

    .experience-title h4:first-child{
      text-decoration: underline;
    }

    .experience ul {
      padding-top: 0px;
    }

    .center-text {
      text-align: center;
    }

    /* Media query for tablet viewport */
    @media screen and (min-width: 630px) {
      .grid {
        grid-auto-flow: none;
        grid-row-gap: 25px;
      }

      .page-grid-container {
        display: grid;
        column-gap: 20px;
      }

      .resume-section {
        grid-column: 1 / 4;
      }

      .resume-section-header h3 {
        margin-top: 4px;
      }

      .experience {
        padding-bottom: 15px;
      }

      .experience-title h4:first-child{
        text-decoration: none;
      }

      .experience ul {
        padding-top: 8px;
      }

      .experience-title h4 {
        margin: 0px;
      }

      div .experience:first-child {
        margin-top: 15px;
      }

      .resume-actions {
        grid-column: 4;
      }
    }
  `
})
export class ResumeComponent {

}
