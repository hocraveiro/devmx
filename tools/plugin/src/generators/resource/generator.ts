import { libraryGenerator } from '@nx/nest/src/generators/library/library';
import { ResourceGeneratorSchema } from './schema';
import { Tree, formatFiles } from '@nx/devkit';
import { updateDevMXJson } from '../../utils';
import { normalizeSchema } from './lib';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const normalizedSchema = normalizeSchema(tree, options);

  await libraryGenerator(tree, normalizedSchema);

  updateDevMXJson(tree, (value) => {
    const name = normalizedSchema.name;
    const config = normalizedSchema.directory + '/project.json';
    value.domains[options.domain].resources[name] = { name, config };
    return value;
  });

  await formatFiles(tree);
}

export default resourceGenerator;
