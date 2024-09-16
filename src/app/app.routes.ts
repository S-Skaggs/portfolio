import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MilitaryComponent } from './military/military.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'military',
    component: MilitaryComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
