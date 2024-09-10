/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fn } from './fn';

export interface Type<T = any> extends Fn {
  new (...args: any[]): T;
}
