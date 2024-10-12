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
    title: 'Sheldon \' Portfolio',
    component: HomeComponent
  },
  {
    path: 'home',
    title: 'Sheldon \' Portfolio',
    component: HomeComponent
  },
  {
    path: 'about',
    title: 'Sheldon \' Portfolio',
    component: AboutComponent
  },
  {
    path: 'military',
    title: 'Military',
    component: MilitaryComponent
  },
  {
    path: 'personal',
    title: 'Personal',
    component: PersonalComponent
  },
  {
    path: 'projects',
    title: 'Projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    title: 'Resume',
    component: ResumeComponent
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent
  }
];
