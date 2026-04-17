import type { FaceBoundingBox, LightingLevel, MotionLevel } from '../perception/schemas/perception-output';

export interface VisualStreamFrame {
  timestampUtc: string;
  expression: string;
  faceDetected: boolean;
  faceBox?: FaceBoundingBox;
  lighting: LightingLevel;
  motion: MotionLevel;
}

export class VisualStream {
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

  emit(frame: Omit<VisualStreamFrame, 'timestampUtc'>): VisualStreamFrame {
    return {
      timestampUtc: new Date().toISOString(),
      ...frame,
    };
  }
}
