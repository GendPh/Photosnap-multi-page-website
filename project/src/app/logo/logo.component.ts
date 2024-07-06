import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styles: ``
})
export class LogoComponent {
  @Input("color") color: string = "#000000";
}
