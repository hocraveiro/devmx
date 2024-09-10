import { Entity } from './entity';

export type Updatable<T extends Entity> = Partial<T> & { id: string };
