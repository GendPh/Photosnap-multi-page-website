import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroContainerComponent } from '../hero-container/hero-container.component';
import { StoryContainerComponent } from '../story-container/story-container.component';
import { FeatureComponent } from '../feature/feature.component';

interface HomeDetails {
  img: string;
  title: string;
  description: string;
  btn: string;
}
interface Story {
  img: string;
  title: string;
  author: string;
}

interface Feature {
  img: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroContainerComponent, StoryContainerComponent, FeatureComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  public showInfo: boolean = false;

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

  stories: Story[] = [
    {
      img: 'cityscapes',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz'
    },
    {
      img: '18-days-voyage',
      title: '18 Days Voyage',
      author: 'Alexei Borodin'
    },
    {
      img: 'architecturals',
      title: 'Architecturals',
      author: 'Samantha Brooke'
    },
  ]

  features: Feature[] = [
    {
      img: 'no-limit',
      title: 'No Photo Upload Limit',
      description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
    },
    {
      img: 'embed',
      title: 'Available to Embed',
      description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
    },
  ]
}
