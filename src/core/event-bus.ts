export type EventHandler<TPayload> = (payload: TPayload) => void;

export class EventBus<TEvents extends Record<string, unknown>> {
  private handlers = new Map<keyof TEvents, Set<EventHandler<any>>>();

  on<TKey extends keyof TEvents>(event: TKey, handler: EventHandler<TEvents[TKey]>): () => void {
    const current = this.handlers.get(event) ?? new Set<EventHandler<TEvents[TKey]>>();
    current.add(handler);
    this.handlers.set(event, current);

    return () => {
      current.delete(handler);
      if (current.size === 0) {
        this.handlers.delete(event);
      }
    };
  }

  emit<TKey extends keyof TEvents>(event: TKey, payload: TEvents[TKey]): void {
    const current = this.handlers.get(event);
    if (!current) return;

    for (const handler of current) {
      handler(payload);
    }
  }

  clear(): void {
    this.handlers.clear();
  }
}
