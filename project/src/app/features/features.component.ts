import { Component, OnInit } from '@angular/core';
import { AllFeaturesComponent } from '../all-features/all-features.component';
import { HeroContainerComponent } from '../hero-container/hero-container.component';
import { BetaInviteComponent } from '../beta-invite/beta-invite.component';

interface HomeDetails {
  img: string;
  title: string;
  description: string;
  btn: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [HeroContainerComponent, AllFeaturesComponent, BetaInviteComponent],
  templateUrl: './features.component.html',
  styles: ``
})
export class FeaturesComponent implements OnInit {

  public showContent = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }

  details: HomeDetails = {
    img: 'hero',
    title: 'FEATURES',
    description: 'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.',
    btn: ''
  }
}
