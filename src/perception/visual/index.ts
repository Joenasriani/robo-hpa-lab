import type { FaceBoundingBox, LightingLevel, MotionLevel, VisualCues } from '../schemas/perception-output';

export function buildVisualCues(input: {
  expression: string;
  faceDetected: boolean;
  faceBox?: FaceBoundingBox;
  lighting?: LightingLevel;
  motion?: MotionLevel;
}): VisualCues {
  return {
    expression: input.expression,
    faceDetected: input.faceDetected,
    faceBox: input.faceBox,
    lighting: input.lighting ?? 'unknown',
    motion: input.motion ?? 'unknown',
  };
}
