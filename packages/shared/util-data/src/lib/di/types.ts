import { Token } from './token';

export interface Fn {
  readonly name: string;
}

export interface Type<T> extends Fn {
  new (...params: unknown[]): T;
}

export type Abstract<T> = abstract new (...params: unknown[]) => T;

export type ProviderKey<T> = Abstract<T> | Token<T>;
export type ProviderImpl<T> = T | Type<T>;

export interface Provider<T = unknown> {
  for: ProviderKey<T>;
  use?: ProviderImpl<T>;
  add?: ProviderKey<T>[];
}

export type UseAs = 'useValue' | 'useClass' | 'useFactory';

export interface ProviderItem<T = unknown> extends Provider<T> {
  useAs: UseAs;
}

export interface ProvidedAs<T> {
  provided: ProviderImpl<T>;
  useAs: UseAs;
}
