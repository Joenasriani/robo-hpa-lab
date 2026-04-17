export interface DebugStudioState {
  frozen: boolean;
  lastLatencyMs?: number;
  provider?: string;
}

export const createInitialDebugStudioState = (): DebugStudioState => ({
  frozen: false,
});
