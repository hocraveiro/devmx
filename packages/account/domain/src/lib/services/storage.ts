export abstract class StorageService {
  abstract setItem(key: string, value: string): void;

  abstract getItem(key: string, parsed?: boolean): string;
  abstract getItem<T>(key: string, parsed: true): T;
}
