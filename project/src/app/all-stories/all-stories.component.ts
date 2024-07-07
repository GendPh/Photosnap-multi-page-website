import { Component, Input } from '@angular/core';
import { StoryContainerComponent } from '../story-container/story-container.component';
import { CommonModule } from '@angular/common';

interface Story {
  img: string;
  title: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-all-stories',
  standalone: true,
  imports: [CommonModule, StoryContainerComponent],
  templateUrl: './all-stories.component.html',
  styles: ``
})
export class AllStoriesComponent {
  @Input() showFirstFour = false;

  stories: Story[] = [
    {
      img: 'mountains',
      title: 'The Mountains',
      author: 'John Appleseed',
      date: 'April 16th 2020'
    },
    {
      img: 'cityscapes',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      date: 'April 14th 2020'
    },
    {
      img: '18-days-voyage',
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      date: 'April 11th 2020'
    },
    {
      img: 'architecturals',
      title: 'Architecturals',
      author: 'Samantha Brooke',
      date: 'April 9th 2020'
    },
    {
      img: 'world-tour',
      title: 'World Tour 2019',
      author: 'Timothy Wagner',
      date: 'April 7th 2020'
    },
    {
      img: 'unforeseen-corners',
      title: 'Unforeseen Corners',
      author: 'William Malcolm',
      date: 'April 3rd 2020'
    },
    {
      img: 'king-on-africa',
      title: 'King on Africa: Part II',
      author: 'Tim Hillenburg',
      date: 'March 29th 2020'
    },
    {
      img: 'trip-to-nowhere',
      title: 'The Trip to Nowhere',
      author: 'Felicia Rourke',
      date: 'March 21st 2020'
    },
    {
      img: 'rage-of-the-sea',
      title: 'Rage of The Sea',
      author: 'Mohammed Abdul',
      date: 'March 19th 2020'
    },
    {
      img: 'running-free',
      title: 'Running Free',
      author: 'Michelle',
      date: 'March 16th 2020'
    },
    {
      img: 'behind-the-waves',
      title: 'Behind the Waves',
      author: 'Lamarr Wilson',
      date: 'March 16th 2020'
    },
    {
      img: 'calm-waters',
      title: 'Calm Waters',
      author: 'Samantha Brooke',
      date: 'March 11th 2020'
    },
    {
      img: 'milky-way',
      title: 'The Milky Way',
      author: 'Benjamin Cruz',
      date: 'March 5th 2020'
    },
    {
      img: 'dark-forest',
      title: 'Night at The Dark Forest',
      author: 'Mohammed Abdul',
      date: 'March 4th 2020'
    },
    {
      img: 'somwarpet',
      title: 'Somwarpet’s Beauty',
      author: 'Michelle',
      date: 'March 1st 2020'
    },
    {
      img: 'land-of-dreams',
      title: 'Land of Dreams',
      author: 'William Malcolm',
      date: 'February 25th 2020'
    },
  ]

}
