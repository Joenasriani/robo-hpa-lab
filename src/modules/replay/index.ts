import type { PerceptionOutput } from '../../perception/schemas/perception-output';
import { StateManager } from '../../core/state-manager';

export class ReplayModule {
  private readonly manager = new StateManager<PerceptionOutput>();

  start(): void {
    this.manager.startRecording();
  }

  stop(): void {
    this.manager.stop();
  }

  push(output: PerceptionOutput): void {
    this.manager.push(output);
  }

  snapshot(): PerceptionOutput[] {
    return this.manager.getState().items;
  }
}
