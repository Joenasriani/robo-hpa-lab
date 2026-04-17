import type {
  DistanceBand,
  FaceBoundingBox,
  LightingLevel,
  MotionLevel,
  SceneContext,
  SubjectAlignment,
} from '../schemas/perception-output';

function inferDistance(faceBox?: FaceBoundingBox): DistanceBand {
  if (!faceBox) return 'unknown';
  const width = Math.max(0, faceBox.xmax - faceBox.xmin);
  const height = Math.max(0, faceBox.ymax - faceBox.ymin);
  const area = width * height;

  if (area > 180000) return 'near';
  if (area > 70000) return 'medium';
  return 'far';
}

function inferAlignment(faceBox?: FaceBoundingBox): SubjectAlignment {
  if (!faceBox) return 'unknown';
  const centerX = (faceBox.xmin + faceBox.xmax) / 2;
  return centerX >= 350 && centerX <= 650 ? 'centered' : 'off-axis';
}

export function inferSceneContext(input: {
  peopleCount?: number;
  faceBox?: FaceBoundingBox;
  motion?: MotionLevel;
  lighting?: LightingLevel;
}): SceneContext {
  return {
    peopleCount: input.peopleCount ?? (input.faceBox ? 1 : 0),
    distance: inferDistance(input.faceBox),
    motion: input.motion ?? 'unknown',
    lighting: input.lighting ?? 'unknown',
    subjectAlignment: inferAlignment(input.faceBox),
  };
}
