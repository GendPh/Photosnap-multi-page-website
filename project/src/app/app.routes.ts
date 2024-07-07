import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home'
  },
  {
    path: 'stories', component: StoriesComponent, title: 'Stories'
  },
  {
    path: 'features', component: FeaturesComponent, title: 'Features'
  },
  {
    path: 'pricing', component: PricingComponent, title: 'Pricing'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
