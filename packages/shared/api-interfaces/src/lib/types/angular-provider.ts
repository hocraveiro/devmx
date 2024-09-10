/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type } from './type';
import { Fn } from './fn';

interface ValueSansProvider {
  useValue: any;
}

export interface AngularValueProvider extends ValueSansProvider {
  provide: any;

  multi?: boolean;
}

interface StaticClassSansProvider {
  useClass: Type<any>;

  deps: any[];
}

export interface AngularStaticClassProvider extends StaticClassSansProvider {
  provide: any;

  multi?: boolean;
}

interface ConstructorSansProvider {
  deps?: any[];
}

export interface AngularConstructorProvider extends ConstructorSansProvider {
  provide: Type<any>;

  multi?: boolean;
}

interface ExistingSansProvider {
  useExisting: any;
}

export interface AngularExistingProvider extends ExistingSansProvider {
  provide: any;

  multi?: boolean;
}

interface FactorySansProvider {
  useFactory: Fn;

  deps?: any[];
}

export interface AngularFactoryProvider extends FactorySansProvider {
  provide: any;

  multi?: boolean;
}

export type AngularStaticProvider =
  | AngularValueProvider
  | AngularExistingProvider
  | AngularStaticClassProvider
  | AngularConstructorProvider
  | AngularFactoryProvider
  | any[];

interface ClassSansProvider {
  useClass: Type<any>;
}

export interface AngularClassProvider extends ClassSansProvider {
  provide: any;

  multi?: boolean;
}

export type AngularTypeProvider<T = any> = Type<T>;

export type AngularProvider =
  | AngularTypeProvider
  | AngularValueProvider
  | AngularClassProvider
  | AngularConstructorProvider
  | AngularExistingProvider
  | AngularFactoryProvider
  | any[];
