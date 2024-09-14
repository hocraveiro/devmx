/* eslint-disable @typescript-eslint/no-unused-vars */
export const load = async <T>(generator: AsyncGenerator<T>) => {
  for await (const _ of generator) {
    //
  }
};
