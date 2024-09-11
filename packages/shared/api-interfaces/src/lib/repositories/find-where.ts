/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fn } from '../types';

export type FindWhereProperty<
  PropertyToBeNarrowed,
  Property = PropertyToBeNarrowed
> = PropertyToBeNarrowed extends Promise<infer I>
  ? FindWhereProperty<NonNullable<I>>
  : PropertyToBeNarrowed extends Array<infer I>
  ? FindWhereProperty<NonNullable<I>>
  : PropertyToBeNarrowed extends Fn
  ? never
  : PropertyToBeNarrowed extends Buffer
  ? Property
  : PropertyToBeNarrowed extends Date
  ? Property
  : PropertyToBeNarrowed extends string
  ? Property
  : PropertyToBeNarrowed extends string
  ? Property
  : PropertyToBeNarrowed extends number
  ? Property
  : PropertyToBeNarrowed extends boolean
  ? Property
  : PropertyToBeNarrowed extends object
  ? FindWhere<Property> | FindWhere<Property>[] | boolean | Property
  : Property;

export type FindWhere<T> = {
  [P in keyof T]?: P extends 'toString'
    ? unknown
    : FindWhereProperty<NonNullable<T[P]>>;
};

// export type FindWhere<T> = {
//   [K in keyof T]?: T[K] extends string | number
//     ? `${T[K]}`
//     : FindWhere<T[K]> | any;
// };
