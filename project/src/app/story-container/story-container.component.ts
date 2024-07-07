import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Story {
  img: string;
  title: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-story-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-container.component.html',
  styles: ``
})
export class StoryContainerComponent {

  @Input() showDate = false;

  @Input() story: Story = {
    img: 'mountains',
    title: 'The Mountains',
    author: 'John Appleseed',
    date: 'April 16th 2020'
  };
}
