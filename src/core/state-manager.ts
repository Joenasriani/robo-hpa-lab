export interface ReplayState<TItem> {
  isRecording: boolean;
  isPaused: boolean;
  items: TItem[];
}

export class StateManager<TItem> {
  private state: ReplayState<TItem> = {
    isRecording: false,
    isPaused: false,
    items: [],
  };

  getState(): ReplayState<TItem> {
    return {
      ...this.state,
      items: [...this.state.items],
    };
  }

  startRecording(): void {
    this.state.isRecording = true;
    this.state.isPaused = false;
  }

  pause(): void {
    this.state.isPaused = true;
  }

  resume(): void {
    if (this.state.isRecording) {
      this.state.isPaused = false;
    }
  }

  stop(): void {
    this.state.isRecording = false;
    this.state.isPaused = false;
  }

  push(item: TItem): void {
    if (!this.state.isRecording || this.state.isPaused) return;
    this.state.items.push(item);
  }

  reset(): void {
    this.state.items = [];
    this.state.isRecording = false;
    this.state.isPaused = false;
  }
}
