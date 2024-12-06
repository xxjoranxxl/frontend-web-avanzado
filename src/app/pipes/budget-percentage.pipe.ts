import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetPercentage'
})
export class BudgetPercentagePipe implements PipeTransform {
  transform(value: number, total: number): string {
    if (total === 0 || value === 0) {
      return '0%';
    }
    const percentage = ((value / total) * 100).toFixed(2);
    return `${percentage}%`;
  }
}
