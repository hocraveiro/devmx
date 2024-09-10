import { NormalizedEntityGeneratorSchema } from '../schema';
import { generateFiles, Tree } from '@nx/devkit';
import { join } from 'node:path';

export function generateDomain(
  tree: Tree,
  projectRoot: string,
  schema: NormalizedEntityGeneratorSchema
) {
  const srcFolder = join(__dirname, '..', 'files', 'domain');
  generateFiles(tree, srcFolder, projectRoot, schema);
}
