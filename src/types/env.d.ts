interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_BASE: string;
  readonly VITE_GA_ID?: string;
  readonly VITE_GTM_ID?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
