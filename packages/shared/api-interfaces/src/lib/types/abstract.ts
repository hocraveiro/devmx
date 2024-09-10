/* eslint-disable @typescript-eslint/no-explicit-any */
export type Abstract<T> = abstract new (...params: any[]) => T;
