import { NormalizedEntityGeneratorSchema } from '../schema';
import { generateFiles, Tree } from '@nx/devkit';
import { join } from 'node:path';

export function generateDataSource(
  tree: Tree,
  projectRoot: string,
  schema: NormalizedEntityGeneratorSchema,
  domainPath: string
) {
  const srcFolder = join(__dirname, '..', 'files', 'data-source');
  const substitutions = { ...schema, domainPath };
  generateFiles(tree, srcFolder, projectRoot, substitutions);
}
