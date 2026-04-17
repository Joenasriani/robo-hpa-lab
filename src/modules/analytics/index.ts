import type { PerceptionOutput } from '../../perception/schemas/perception-output';

export interface AnalyticsSnapshot {
  totalFrames: number;
  averageOverallScore: number;
}

export function summarizeAnalytics(outputs: PerceptionOutput[]): AnalyticsSnapshot {
  if (outputs.length === 0) {
    return { totalFrames: 0, averageOverallScore: 0 };
  }

  const total = outputs.reduce((sum, item) => sum + item.overallScore, 0);
  return {
    totalFrames: outputs.length,
    averageOverallScore: total / outputs.length,
  };
}
