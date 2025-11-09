/** Common utility types (без any). */
export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;
export type Dictionary<T = unknown> = Record<string, T>;
export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

/** ID helpers */
export type Id = string;
export type NumericId = number;
