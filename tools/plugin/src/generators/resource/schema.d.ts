import { LibraryGeneratorOptions } from '@nx/nest/src/generators/library/schema';

export interface ResourceGeneratorSchema {
  name: string;
  domain: string;
}

export interface NormalizedResourceGeneratorSchema
  extends ResourceGeneratorSchema,
    LibraryGeneratorOptions {
  directory: string;
}
