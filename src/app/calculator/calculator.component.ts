import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  number1:  number = 0;
  number2: number = 0;
  result: number = 0;

  CalculatorResult(){

    this.result = this.number1 + this.number2;

  }


}
