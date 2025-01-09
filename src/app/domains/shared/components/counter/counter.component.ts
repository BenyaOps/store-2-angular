import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor() {
    console.log('CounterComponent');
    console.log('-'.repeat(10));

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']; // get the duration changes, if not exist return undefined
    if (duration) {
      this.doSomething();
    }
    if (duration.currentValue !== duration.previousValue) {
      console.log('duration changed');

    }
  }
  doSomething() {
    console.log('doSomething');
    console.log('change durtion');

    console.log('-'.repeat(10));
  }
  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration', this.duration);
    console.log('message', this.message);
    window.setInterval(() => {
      console.log('counter');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    // ngOnDestroy is called when the component is destroyed
    // evita memory leaks and unsubscribe from observables
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
