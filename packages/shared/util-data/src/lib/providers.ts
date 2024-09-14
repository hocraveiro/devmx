import { createToken, load, set } from './di';

type PlatformSide = 'server' | 'browser';

export const PLATFORM_SIDE = createToken<PlatformSide>('env.side');

export function providePlatformSide(platformSide: string) {
  return async () => {
    await load(set({ ref: PLATFORM_SIDE, use: platformSide }));
  };
}
