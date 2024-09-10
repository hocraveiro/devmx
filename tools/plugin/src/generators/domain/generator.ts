import { libraryGenerator } from '@nx/js/src/generators/library/library';
import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { DomainGeneratorSchema } from './schema';
import { normalizeSchema } from './lib';
import { join } from 'path';

export async function domainGenerator(
  tree: Tree,
  options: DomainGeneratorSchema
) {
  const schema = normalizeSchema(options);

  await libraryGenerator(tree, schema);

  generateFiles(tree, join(__dirname, 'files'), schema.directory, options);

  await formatFiles(tree);
}

export default domainGenerator;
