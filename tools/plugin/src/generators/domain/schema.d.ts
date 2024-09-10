import { LibraryGeneratorSchema } from '@nx/js/src/utils/schema';

export interface DomainGeneratorSchema {
  name: string;
  directory?: string;
}

export interface NormalizedDomainGeneratorSchema
  extends LibraryGeneratorSchema {
  directory: string;
}
