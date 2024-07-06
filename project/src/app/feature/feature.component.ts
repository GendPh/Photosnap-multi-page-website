import { Component, Input } from '@angular/core';

interface Feature {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styles: ``
})
export class FeatureComponent {

  @Input() feature: Feature = {
    img: 'responsive',
    title: '100% Responsive',
    description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
  }

}
