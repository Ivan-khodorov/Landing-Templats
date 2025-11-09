export interface ErrorResponse {
  status: number;
  code: string;         // e.g. 'VALIDATION_ERROR'
  message: string;
  details?: Record<string, string[] | string>;
}
