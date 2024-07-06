import { state } from '@angular/animations';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuSignalState = signal<boolean>(false);

  constructor() { }

  public toggleMenu() {
    this.toggleBodyOverflow();
    this.menuSignalState.update(state => !state)
  }

  public openMenu() {
    this.toggleBodyOverflow();
    this.menuSignalState.update(() => true)
  }

  public closeMenu() {
    this.toggleBodyOverflow();
    this.menuSignalState.update(() => false)
  }


  public toggleBodyOverflow() {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

}
