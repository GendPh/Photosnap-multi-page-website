import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroContainerComponent } from '../hero-container/hero-container.component';

interface HomeDetails {
  img: string;
  title: string;
  description: string;
  btn: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, HeroContainerComponent],
  templateUrl: './pricing.component.html',
  styles: ``
})

export class PricingComponent implements OnInit {

  public showContent = false;

  public pricing: HomeDetails = {
    img: 'hero-pricing',
    title: 'PRICING',
    description: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
    btn: ''
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }
}
