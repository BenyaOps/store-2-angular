import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('waveform') container!: ElementRef;
  private ws: WaveSurfer | undefined;
  isPlaying = signal(false);

  ngAfterViewInit() {
    const wavesurfer = WaveSurfer.create({
      url: this.audioUrl, // 'https://example.com/audio.mp3',
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });

    this.ws = wavesurfer;
    this.ws.on('play', () => {
      this.isPlaying.update(() => true);
    });
    this.ws.on('pause', () => {
      this.isPlaying.update(() => false);
    });
  }
  playPause() {
    this.ws?.playPause().then(() => {
      console.log('playPause');
    }
    );
  }
}
