import { register, token } from './di/di';

type PlatformSide = 'server' | 'browser';

export const PLATFORM_SIDE = token<PlatformSide>('env.side');

export function providePlatformSide(platformSide: string) {
  register({ for: PLATFORM_SIDE, use: platformSide });
}
