/* eslint-disable @typescript-eslint/no-explicit-any */
export type FindWhere<T> = {
  [K in keyof T]?: T[K] extends string | number
    ? `${T[K]}`
    : FindWhere<T[K]> | any;
};
