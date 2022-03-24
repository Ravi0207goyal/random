import { Component, VERSION, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  thirdNumber: number = 0;
  maxRange: number = 1000
  minRange: number = 1

  ngOnInit(): void {
    this.generateSeries();
    const source = interval(3000);
    const subscribe = source.subscribe(() => {
      this.generateSeries();
    });
  }

  generateSeries() {
    this.firstNumber = Math.floor(Math.random() * (this.maxRange - this.minRange)) + this.minRange
    this.secondNumber = Math.floor(Math.random() * (this.maxRange - this.firstNumber - this.minRange)) + this.minRange
    this.thirdNumber = this.maxRange - (this.firstNumber + this.secondNumber)
  }
}
