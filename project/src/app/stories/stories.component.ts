import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllStoriesComponent } from '../all-stories/all-stories.component';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, AllStoriesComponent],
  templateUrl: './stories.component.html',
  styles: ``
})
export class StoriesComponent implements OnInit {

  public showContent = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.showContent = true;
    }, 200);
  }

}
