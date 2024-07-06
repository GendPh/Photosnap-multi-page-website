import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { MenuService } from '../service/menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent, MobileNavComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  constructor(public menuService: MenuService) { }
}
