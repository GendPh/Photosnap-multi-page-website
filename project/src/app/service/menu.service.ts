import { state } from '@angular/animations';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuSignalState = signal<boolean>(false);

  constructor() { }

  public toggleMenu() {
    this.menuSignalState.update(state => !state)
  }

  public openMenu() {
    this.menuSignalState.update(() => true)
  }

  public closeMenu() {
    this.menuSignalState.update(() => false)
  }

}
