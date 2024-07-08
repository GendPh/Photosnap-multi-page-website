import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Plans {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
}



@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styles: ``
})
export class PlansComponent {
  @Input() public planIndex: number = 0;
  @Input() public plan: string = 'pro';
  @Input() public planChosen: string = 'pro';
  @Input() public isMonthly: boolean = true;
  @Output() public planChosenChange = new EventEmitter<string>();

  public plans: Plans[] = [
    {
      title: 'Basic',
      description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: '19.00',
      yearlyPrice: '190.00'
    },
    {
      title: 'Pro',
      description: 'More advanced features available. Recommended for photography veterans and professionals.',
      monthlyPrice: '39.00',
      yearlyPrice: '390.00'
    },
    {
      title: 'Business',
      description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
      monthlyPrice: '99.00',
      yearlyPrice: '990.00'
    }
  ];

  changePlan(plan: string): void {
    this.planChosenChange.emit(plan);
  }
}
