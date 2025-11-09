export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
  status: number;
  meta?: Record<string, unknown>;
}
