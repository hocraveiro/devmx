import { Linter } from '@nx/eslint';
import {
  DomainGeneratorSchema,
  NormalizedDomainGeneratorSchema,
} from '../schema';
import { join } from 'node:path';
import { names } from '@nx/devkit';

export function normalizeSchema(
  schema: DomainGeneratorSchema
): NormalizedDomainGeneratorSchema {
  const { fileName } = names(schema.name);

  const directory = schema.directory
    ? schema.directory
    : join('packages', fileName, 'domain');

  return {
    ...schema,
    directory,
    importPath: `@devmx/${fileName}/domain`,
    projectNameAndRootFormat: 'as-provided',
    tags: 'type:domain',
    linter: Linter.EsLint,
    testEnvironment: 'jsdom',
    strict: true,
    compiler: 'tsc',
    minimal: true,
  };
}
