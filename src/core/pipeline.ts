import type { PerceptionOutput } from '../perception/schemas/perception-output';

export interface PipelineContext {
  sessionId: string;
  timestampUtc: string;
}

export interface PipelineStage<TInput, TOutput> {
  name: string;
  run(input: TInput, context: PipelineContext): Promise<TOutput> | TOutput;
}

export interface PipelineResult<TOutput> {
  output: TOutput;
  completedStages: string[];
}

export class Pipeline<TInput, TOutput> {
  constructor(private readonly stages: Array<PipelineStage<any, any>>) {}

  async run(input: TInput, context: PipelineContext): Promise<PipelineResult<TOutput>> {
    let current: unknown = input;
    const completedStages: string[] = [];

    for (const stage of this.stages) {
      current = await stage.run(current, context);
      completedStages.push(stage.name);
    }

    return {
      output: current as TOutput,
      completedStages,
    };
  }
}

export type PerceptionPipelineResult = PipelineResult<PerceptionOutput>;
