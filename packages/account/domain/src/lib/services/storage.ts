export abstract class StorageService implements Storage {
  abstract length: number;

  abstract clear(): void;

  abstract key(index: number): string | null;

  abstract removeItem(key: string): void;

  abstract setItem(key: string, value: string): void;

  abstract getItem(key: string, parsed?: boolean): string;
  abstract getItem<T>(key: string, parsed: true): T;
}
