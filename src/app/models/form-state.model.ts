export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormState<TData = Record<string, unknown>> {
  status: FormStatus;
  data?: TData;
  error?: string;
}
