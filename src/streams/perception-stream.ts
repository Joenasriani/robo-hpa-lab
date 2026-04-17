import type { AudioStreamFrame } from './audio-stream';
import type { VisualStreamFrame } from './visual-stream';
import type { PerceptionOutput } from '../perception/schemas/perception-output';
import { EventBus } from '../core/event-bus';

export interface PerceptionEvents {
  visualFrame: VisualStreamFrame;
  audioFrame: AudioStreamFrame;
  perceptionOutput: PerceptionOutput;
}

export class PerceptionStream {
  constructor(private readonly bus: EventBus<PerceptionEvents>) {}

  publishVisual(frame: VisualStreamFrame): void {
    this.bus.emit('visualFrame', frame);
  }

  publishAudio(frame: AudioStreamFrame): void {
    this.bus.emit('audioFrame', frame);
  }

  publishOutput(output: PerceptionOutput): void {
    this.bus.emit('perceptionOutput', output);
  }
}
