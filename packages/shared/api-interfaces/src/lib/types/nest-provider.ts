/* eslint-disable @typescript-eslint/no-explicit-any */
import { Token } from './token';
import { Type } from './type';

export interface OptionalFactoryDependency {
  token: Token;
  optional: boolean;
}

export interface NestClassProvider<T = any> {
  provide: Token<T>;
  useClass: Type<T>;
  // inject?: Array<Token | OptionalFactoryDependency>
  inject?: any;
}

export interface NestValueProvider<T = any> {
  provide: Token<T>;
  useValue: T;
  inject?: any;
}

export interface NestFactoryProvider<T = any> {
  provide: Token<T>;
  useFactory: (...args: any[]) => T | Promise<T>;
  inject?: Array<Token | OptionalFactoryDependency>;
}

export interface NestExistingProvider {
  provide: Token;
  useExisting: any;
}

export type NestProvider<T = any> =
  | Type<T>
  | NestClassProvider<T>
  | NestValueProvider<T>
  | NestFactoryProvider<T>
  | NestExistingProvider;
