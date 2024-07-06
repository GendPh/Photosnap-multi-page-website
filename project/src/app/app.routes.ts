import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home'
  },
  {
    path: 'stories', component: StoriesComponent, title: 'Stories'
  },
  {
    path: 'features', component: HomeComponent, title: 'Features'
  },
  {
    path: 'pricing', component: HomeComponent, title: 'Pricing'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
