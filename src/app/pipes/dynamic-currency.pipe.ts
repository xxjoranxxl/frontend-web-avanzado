import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicCurrency'
})
export class DynamicCurrencyPipe implements PipeTransform {
  transform(value: any, currency: string): any {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: currency
    }).format(value);
  }
}
