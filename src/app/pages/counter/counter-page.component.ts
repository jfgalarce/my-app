import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 0;
  counterSingnal = signal(0);
  increaseBy (value: number) {
    this.counter += value;
    this.counterSingnal.update((current)=>current + value);
  }
  reset (){
    this.counter = 0;
    this.counterSingnal.set(0);
  }
}