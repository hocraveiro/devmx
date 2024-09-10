import {
  Tree,
  names,
  updateJson,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit';
import libraryGenerator from '@nx/js/src/generators/library/library';
import { DataSourceGeneratorSchema } from './schema';
import { TSConfig } from '../../interfaces';
import { updateDevMXJson } from '../../utils';
import { normalizeSchema } from './lib';
import { join } from 'path';

export async function dataSourceGenerator(
  tree: Tree,
  options: DataSourceGeneratorSchema
) {
  const normalizedSchema = normalizeSchema(tree, options);

  await libraryGenerator(tree, normalizedSchema);

  const substitutions = names(normalizedSchema.domain);

  const srcFolder = join(__dirname, 'files');
  generateFiles(tree, srcFolder, normalizedSchema.directory, substitutions);

  const { sourceRoot } = readProjectConfiguration(tree, normalizedSchema.name);

  const projectRoot = join(sourceRoot, '..');
  updateJson<TSConfig>(tree, `${projectRoot}/tsconfig.json`, (value) => {
    value.compilerOptions['strictPropertyInitialization'] = false;
    return value;
  });

  updateDevMXJson(tree, (value) => {
    const name = normalizedSchema.name;
    const config = normalizedSchema.directory + '/project.json';
    value.domains[options.domain].dataSources[name] = { name, config };
    return value;
  });

  await formatFiles(tree);
}

export default dataSourceGenerator;
