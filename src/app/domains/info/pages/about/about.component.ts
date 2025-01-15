import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CounterComponent } from '@app/domains/shared/components/counter/counter.component';
import { WaveAudioComponent } from "../../components/wave-audio/wave-audio.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-about',
  standalone  : true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(100);
  message = signal('hello');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
