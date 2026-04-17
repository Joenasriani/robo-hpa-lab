import type {
  AudioCues,
  DistressCategory,
  PerceptionOutput,
  VisualCues,
} from '../schemas/perception-output';
import { inferSceneContext } from '../scene-context';

function toDistressCategory(score: number): DistressCategory {
  if (score >= 0.8) return 'SEVERE';
  if (score >= 0.6) return 'HIGH';
  if (score >= 0.4) return 'MODERATE';
  if (score >= 0.2) return 'MILD';
  return 'NONE';
}

export function aggregatePerception(input: {
  sessionId: string;
  visualCues?: VisualCues;
  audioCues?: AudioCues;
  primaryEmotion?: PerceptionOutput['primaryEmotion'];
  primaryEmotionConfidence?: number;
  visualScore?: number;
  audioScore?: number;
}): PerceptionOutput {
  const overallScore =
    input.visualScore !== undefined && input.audioScore !== undefined
      ? (input.visualScore + input.audioScore) / 2
      : input.visualScore ?? input.audioScore ?? 0;

  const sceneContext = inferSceneContext({
    faceBox: input.visualCues?.faceBox,
    motion: input.visualCues?.motion,
    lighting: input.visualCues?.lighting,
  });

  return {
    schemaVersion: '1.0',
    sessionId: input.sessionId,
    timestampUtc: new Date().toISOString(),
    visualCues: input.visualCues,
    audioCues: input.audioCues,
    primaryEmotion: input.primaryEmotion ?? 'NEUTRAL',
    primaryEmotionConfidence: input.primaryEmotionConfidence ?? 0,
    visualScore: input.visualScore,
    audioScore: input.audioScore,
    overallScore,
    sceneContext,
    psychologicalInterpretation: {
      summary: `${input.primaryEmotion ?? 'Neutral'} state detected in lab aggregator.`,
      emotionalState: (input.primaryEmotion ?? 'neutral').toLowerCase(),
      recommendedAction: overallScore >= 0.6 ? 'Escalate to operator review.' : 'Continue monitoring.',
      distressLevel: overallScore,
      distressCategory: toDistressCategory(overallScore),
    },
    inferenceProvider: 'simulated',
  };
}
