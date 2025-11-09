export interface AnalyticsEvent<TPayload = Record<string, unknown>> {
  name: string;      // 'cta_click', 'form_submit', 'video_play'
  timestamp: string; // ISO
  payload?: TPayload;
}
