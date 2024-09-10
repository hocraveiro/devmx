import { LibraryGeneratorSchema } from '@nx/js/src/utils/schema';

export interface DataSourceGeneratorSchema {
  name: string;
  domain: string;
}

export interface NormalizedDataSourceGeneratorSchema
  extends DataSourceGeneratorSchema,
    LibraryGeneratorSchema {
  directory: string;
}
