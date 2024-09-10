import { names, readProjectConfiguration, Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { join } from 'node:path';
import {
  DataSourceGeneratorSchema,
  NormalizedDataSourceGeneratorSchema,
} from '../schema';

export function normalizeSchema(
  tree: Tree,
  schema: DataSourceGeneratorSchema
): NormalizedDataSourceGeneratorSchema {
  const { fileName } = names(schema.name);

  const { sourceRoot } = readProjectConfiguration(tree, schema.domain);
  if (!sourceRoot) throw `Domain sourceRoot not found`;

  const directory = join(sourceRoot, '..', '..', fileName);

  const domain = schema.domain.replace(/-domain/, '');

  const importPath = `@devmx/${domain}-${fileName}`;

  return {
    domain,
    directory,
    importPath,
    name: `${domain}-${fileName}`,
    projectNameAndRootFormat: 'as-provided',
    tags: 'type:data-source',
    linter: Linter.EsLint,
    testEnvironment: 'node',
    strict: true,
    compiler: 'tsc',
    minimal: true,
  };
}
