export interface AudioStreamFrame {
  timestampUtc: string;
  tone: string;
  pitch: 'LOW' | 'MID' | 'HIGH' | 'SPIKE';
  volume: 'SOFT' | 'MODERATE' | 'LOUD' | 'SPIKE';
  rate: 'SLOW' | 'BALANCED' | 'FAST' | 'FRAGMENTED';
  speaking: boolean;
}

export class AudioStream {
  private active = false;

  start(): void {
    this.active = true;
  }

  stop(): void {
    this.active = false;
  }

  isActive(): boolean {
    return this.active;
  }

  emit(frame: Omit<AudioStreamFrame, 'timestampUtc'>): AudioStreamFrame {
    return {
      timestampUtc: new Date().toISOString(),
      ...frame,
    };
  }
}
