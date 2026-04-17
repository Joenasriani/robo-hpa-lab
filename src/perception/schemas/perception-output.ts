export type EmotionLabel =
  | 'FEAR'
  | 'ANGER'
  | 'SADNESS'
  | 'JOY'
  | 'DISGUST'
  | 'SURPRISE'
  | 'TRUST'
  | 'ANTICIPATION'
  | 'NEUTRAL';

export type DistressCategory = 'NONE' | 'MILD' | 'MODERATE' | 'HIGH' | 'SEVERE';
export type DistanceBand = 'near' | 'medium' | 'far' | 'unknown';
export type MotionLevel = 'low' | 'medium' | 'high' | 'unknown';
export type LightingLevel = 'dark' | 'dim' | 'normal' | 'bright' | 'unknown';
export type SubjectAlignment = 'centered' | 'off-axis' | 'unknown';

export interface FaceBoundingBox {
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
}

export interface VisualCues {
  expression: string;
  faceDetected: boolean;
  faceBox?: FaceBoundingBox;
  lighting: LightingLevel;
  motion: MotionLevel;
}

export interface AudioCues {
  tone: string;
  pitch: 'LOW' | 'MID' | 'HIGH' | 'SPIKE';
  volume: 'SOFT' | 'MODERATE' | 'LOUD' | 'SPIKE';
  rate: 'SLOW' | 'BALANCED' | 'FAST' | 'FRAGMENTED';
  speaking: boolean;
}

export interface SceneContext {
  peopleCount: number;
  distance: DistanceBand;
  motion: MotionLevel;
  lighting: LightingLevel;
  subjectAlignment: SubjectAlignment;
}

export interface PsychologicalInterpretation {
  summary: string;
  emotionalState: string;
  recommendedAction: string;
  distressLevel: number;
  distressCategory: DistressCategory;
}

export interface PerceptionOutput {
  schemaVersion: '1.0';
  sessionId: string;
  timestampUtc: string;
  visualCues?: VisualCues;
  audioCues?: AudioCues;
  primaryEmotion: EmotionLabel;
  primaryEmotionConfidence: number;
  visualScore?: number;
  audioScore?: number;
  overallScore: number;
  sceneContext?: SceneContext;
  psychologicalInterpretation: PsychologicalInterpretation;
  inferenceProvider: 'live' | 'fallback' | 'simulated';
}
