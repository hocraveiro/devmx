import { Fn, Type } from '../types';

export const is = {
  fn<T>(value: unknown): value is Fn<T> {
    return typeof value === 'function';
  },
  asyncFn<T>(value: unknown): value is Fn<Promise<T>> {
    return this.fn(value) && (value as Fn<T>).constructor.name === 'AsyncFunction';
  },
  type<T>(value: unknown): value is Type<T> {
    return this.fn(value) && typeof (value as Fn<T>).prototype === 'object';
  },
};
