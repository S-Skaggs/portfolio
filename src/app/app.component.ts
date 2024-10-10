import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="pageWrapper">
      <header class="banner">
        SHELDON SKAGGS
        <a routerLink="/home" class="logo-link"><img src="assets/SheldonS_logo.jpg" alt="image of two letter S at an angle" class="banner-logo" /></a>
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/projects">Projects</a></li>
          <li><a routerLink="/resume">Resume</a></li>
          <li><a routerLink="/military">Military</a></li>
          <li><a routerLink="/personal">Personal</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footerNav">
          <ul>
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/projects">Projects</a></li>
            <li><a routerLink="/resume">Resume</a></li>
            <li><a routerLink="/military">Military</a></li>
            <li><a routerLink="/personal">Personal</a></li>
            <li><a routerLink="/about">About</a></li>
          </ul>
        </nav>
        <small>
          &copy;Sheldon Skaggs 2024
        </small>
      </footer>
    </div>
  `,
  styles: ``
})
export class AppComponent {
  title = 'Sheldon\' Portfolio';
}
