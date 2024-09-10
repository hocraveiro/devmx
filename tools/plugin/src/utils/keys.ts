export const keys = <T extends object>(value: T) => {
  return Object.keys(value) as (keyof T)[];
};
