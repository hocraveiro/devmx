import { inject, PLATFORM_SIDE } from '@devmx/shared-util-data';

const storage: Record<string, unknown> = {
  getItem(key: string) {
    return this[key];
  },
  setItem(key: string, value: string) {
    this[key] = value;
  },
};

export function getStorage() {
  const platform = inject(PLATFORM_SIDE);

  return platform === 'browser' ? localStorage : (storage as Storage);
}
