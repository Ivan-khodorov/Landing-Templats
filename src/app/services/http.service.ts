import { HTTP, TIMEOUTS } from '@/app/constants';

export type HttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';

export interface HttpOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
  timeoutMs?: number;
  baseUrl?: string;
}

export async function http<T = unknown>(url: string, opts: HttpOptions = {}): Promise<{status:number; data:T}> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts.timeoutMs ?? TIMEOUTS.REQUEST);

  try {
    const res = await fetch((opts.baseUrl ?? '') + url, {
      method: opts.method ?? 'GET',
      headers: { ...HTTP.DEFAULT_HEADERS, ...(opts.headers ?? {}) },
      body: opts.body ? JSON.stringify(opts.body) : undefined,
      signal: opts.signal ?? controller.signal
    });

    const isJson = (res.headers.get('content-type') || '').includes('application/json');
    const data = (isJson ? await res.json() : await res.text()) as T;
    return { status: res.status, data };
  } finally {
    clearTimeout(timeout);
  }
}
