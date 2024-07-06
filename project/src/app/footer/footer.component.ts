import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SocialsComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear();

}
