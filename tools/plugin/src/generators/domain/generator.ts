import { libraryGenerator } from '@nx/js/src/generators/library/library';
import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { DomainGeneratorSchema } from './schema';
import { updateDevMXJson } from '../../utils';
import { normalizeSchema } from './lib';
import { join } from 'path';

export async function domainGenerator(
  tree: Tree,
  options: DomainGeneratorSchema
) {
  const schema = normalizeSchema(options);

  await libraryGenerator(tree, schema);

  generateFiles(tree, join(__dirname, 'files'), schema.directory, options);

  updateDevMXJson(tree, (value) => {
    const name = schema.name;
    const config = schema.directory + '/project.json';
    value.domains[name] = { name, config, dataSources: {}, resources: {} };
    return value;
  });

  await formatFiles(tree);
}

export default domainGenerator;
