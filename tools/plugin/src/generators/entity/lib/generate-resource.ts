import { controllerGenerator } from '@nx/nest/src/generators/controller/controller';
import { NormalizedEntityGeneratorSchema } from '../schema';
import { generateFiles, Tree } from '@nx/devkit';
import { join } from 'node:path';

export async function generateResource(
  tree: Tree,
  projectRoot: string,
  schema: NormalizedEntityGeneratorSchema,
  dataSourcePath: string
) {
  await controllerGenerator(tree, {
    name: schema.fileNamePlural,
    directory: join(projectRoot, 'lib', 'controllers'),
    module: schema.domain,
    nameAndDirectoryFormat: 'as-provided',
    flat: true,
  });

  const srcFolder = join(__dirname, '..', 'files', 'resource');
  const substitutions = { ...schema, dataSourcePath };
  generateFiles(tree, srcFolder, projectRoot, substitutions);
}
