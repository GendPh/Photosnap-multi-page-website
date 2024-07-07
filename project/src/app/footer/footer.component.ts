import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialsComponent } from '../socials/socials.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent, SocialsComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear();

}
