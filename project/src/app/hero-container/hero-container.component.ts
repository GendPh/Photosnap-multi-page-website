import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface HomeDetails {
  img: string;
  title: string;
  description: string;
  btn: string;
}
@Component({
  selector: 'app-hero-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-container.component.html',
  styles: ``
})
export class HeroContainerComponent {
  @Input() flexReverse: string = "flex-row-reverse";
  @Input() backgroundColor: string = 'bg-white';
  @Input() textColor: string = 'text-black';
  @Input() showGradient: boolean = false;
  @Input() details: HomeDetails = {
    img: 'create-and-share',
    title: 'Create and share your photo stories.',
    description: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    btn: 'get an invite'
  };

}
