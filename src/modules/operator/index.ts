import type { PerceptionOutput } from '../../perception/schemas/perception-output';

export interface OperatorReasoning {
  summary: string;
  recommendedAction: string;
}

export function buildOperatorReasoning(output: PerceptionOutput): OperatorReasoning {
  return {
    summary: output.psychologicalInterpretation.summary,
    recommendedAction: output.psychologicalInterpretation.recommendedAction,
  };
}
