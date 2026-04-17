import type { AudioCues } from '../schemas/perception-output';

export function buildAudioCues(input: {
  tone: string;
  pitch: AudioCues['pitch'];
  volume: AudioCues['volume'];
  rate: AudioCues['rate'];
  speaking: boolean;
}): AudioCues {
  return {
    tone: input.tone,
    pitch: input.pitch,
    volume: input.volume,
    rate: input.rate,
    speaking: input.speaking,
  };
}
