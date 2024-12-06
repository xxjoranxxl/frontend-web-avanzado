import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';  // Pipe de fecha
import { CapitalizePipe } from './capitalize.pipe';   // Pipe de capitalización
import { DynamicCurrencyPipe } from './dynamic-currency.pipe';  // Nuevo pipe de moneda
import { BudgetPercentagePipe } from './budget-percentage.pipe';  // Nuevo pipe de porcentaje

@NgModule({
  declarations: [
    FormatDatePipe,  // Declara el pipe FormatDatePipe
    CapitalizePipe,  // Declara el pipe CapitalizePipe
    DynamicCurrencyPipe,  // Declara el nuevo pipe DynamicCurrencyPipe
    BudgetPercentagePipe  // Declara el nuevo pipe BudgetPercentagePipe
  ],
  imports: [
    CommonModule,   // Agrega CommonModule si vas a usar directivas de Angular en el pipe (como *ngFor)
  ],
  exports: [
    FormatDatePipe,  // Exporta el pipe para usarlo en otros módulos
    CapitalizePipe,  // Exporta el pipe para usarlo en otros módulos
    DynamicCurrencyPipe,  // Exporta el nuevo pipe DynamicCurrencyPipe
    BudgetPercentagePipe  // Exporta el nuevo pipe BudgetPercentagePipe
  ]
})
export class PipesModule {}
