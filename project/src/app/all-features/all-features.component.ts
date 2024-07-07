import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';

interface Feature {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-all-features',
  standalone: true,
  imports: [CommonModule, FeatureComponent],
  templateUrl: './all-features.component.html',
  styles: ``
})
export class AllFeaturesComponent {

  @Input() showFirstThree: boolean = false;

  features: Feature[] = [
    {
      img: 'responsive',
      title: '100% Responsive',
      description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
    },
    {
      img: 'no-limit',
      title: 'No Photo Upload Limit',
      description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
    },
    {
      img: 'embed',
      title: 'Available to Embed',
      description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
    },
    {
      img: 'custom-domain',
      title: 'Custom Domain ',
      description: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
    },
    {
      img: 'boost-exposure',
      title: 'Boost Your Exposure',
      description: 'Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.'
    },
    {
      img: 'drag-drop',
      title: 'Drag & Drop Image',
      description: 'Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to creating stories.'
    },
  ]
}
