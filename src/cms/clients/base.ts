export interface CMSClient {
  get<T=unknown>(path: string): Promise<T>;
}

export function createCMSClient(baseUrl: string): CMSClient {
  return {
    async get<T=unknown>(path: string) {
      const res = await fetch(baseUrl.replace(/\/$/, '') + '/' + path.replace(/^\//, ''));
      if (!res.ok) throw new Error('CMS error ' + res.status);
      return (await res.json()) as T;
    }
  };
}
