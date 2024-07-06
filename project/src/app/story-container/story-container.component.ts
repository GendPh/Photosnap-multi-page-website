import { Component, Input } from '@angular/core';

interface Story {
  img: string;
  title: string;
  author: string;
}

@Component({
  selector: 'app-story-container',
  standalone: true,
  imports: [],
  templateUrl: './story-container.component.html',
  styles: ``
})
export class StoryContainerComponent {
  @Input() story: Story = {
    img: 'mountains',
    title: 'The Mountains',
    author: 'John Appleseed'
  };
}
