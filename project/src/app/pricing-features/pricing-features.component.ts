import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-features.component.html',
  styles: ``
})
export class PricingFeaturesComponent {

  @Input() title: string = 'UNLIMITED STORY POSTING';
  @Input() basicCheck: boolean = true;
  @Input() proCheck: boolean = true;
  @Input() businessCheck: boolean = true;

}
