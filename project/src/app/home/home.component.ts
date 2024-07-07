import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroContainerComponent } from '../hero-container/hero-container.component';
import { FeatureComponent } from '../feature/feature.component';
import { AllStoriesComponent } from '../all-stories/all-stories.component';
import { AllFeaturesComponent } from '../all-features/all-features.component';

interface HomeDetails {
  img: string;
  title: string;
  description: string;
  btn: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroContainerComponent, AllStoriesComponent, AllFeaturesComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  public showContent = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }

  hero: HomeDetails[] = [
    {
      img: 'beautiful-stories',
      title: 'Beautiful stories every time',
      description: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      btn: 'view the stories'
    },
    {
      img: 'designed-for-everyone',
      title: 'Designed for everyone',
      description: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
      btn: 'view the stories'
    }
  ];
}
