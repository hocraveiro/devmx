import { use, PLATFORM_SIDE } from '@devmx/shared-util-data';

const storage: Record<string, unknown> = {
  get length() {
    return Object.keys(this).length - 4
  },
  getItem(key: string) {
    return this[key];
  },
  setItem(key: string, value: string) {
    this[key] = value;
  },
  removeItem(key: string) {
    delete this[key];
  },
};

export function getStorage() {
  const platform = use(PLATFORM_SIDE);

  return platform === 'browser' ? localStorage : (storage as Storage);
}
