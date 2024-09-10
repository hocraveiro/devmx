import { Linter } from '@nx/eslint';
import { names } from '@nx/devkit';
import { join } from 'node:path';
import {
  DomainGeneratorSchema,
  NormalizedDomainGeneratorSchema,
} from '../schema';

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
    name: `${fileName}-domain`,
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
