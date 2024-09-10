import {
  Tree,
  formatFiles,
  readProjectConfiguration,
  output,
} from '@nx/devkit';
import { readImportPath, writeBarrel } from '../../utils';
import { EntityGeneratorSchema } from './schema';
import { join } from 'path';
import {
  generateDataSource,
  generateDomain,
  generateResource,
  normalizeSchema,
} from './lib';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const domain = readProjectConfiguration(tree, options.domain);
  const dataSource = readProjectConfiguration(tree, options.dataSource);

  const normalizedSchema = normalizeSchema(options);

  if (domain.sourceRoot) {
    generateDomain(tree, domain.sourceRoot, normalizedSchema);

    writeBarrel(tree, join(domain.sourceRoot, 'lib', 'dtos'));
    writeBarrel(tree, join(domain.sourceRoot, 'lib', 'entities'));
    writeBarrel(tree, join(domain.sourceRoot, 'lib', 'use-cases'));
    writeBarrel(tree, join(domain.sourceRoot, 'lib', 'repositories'));

    const importPath = readImportPath(domain.sourceRoot);

    if (dataSource.sourceRoot && importPath) {
      generateDataSource(
        tree,
        dataSource.sourceRoot,
        normalizedSchema,
        importPath
      );

      writeBarrel(tree, join(dataSource.sourceRoot, 'lib', 'dtos'));
      writeBarrel(tree, join(dataSource.sourceRoot, 'lib', 'entities'));
      writeBarrel(tree, join(dataSource.sourceRoot, 'lib', 'facades'));
      writeBarrel(tree, join(dataSource.sourceRoot, 'lib', 'providers'));
      writeBarrel(tree, join(dataSource.sourceRoot, 'lib', 'repositories'));

      if (options.resource) {
        const resource = readProjectConfiguration(tree, options.resource);

        const dataSourcePath = readImportPath(dataSource.sourceRoot);

        if (resource.sourceRoot && dataSourcePath) {
          await generateResource(
            tree,
            resource.sourceRoot,
            normalizedSchema,
            dataSourcePath
          );
        }
      }
    }
  }

  await formatFiles(tree);

  const providers = [
    output.colors.gray`provide${normalizedSchema.className}Repository` +
      output.colors.white`(` +
      output.colors.green`${normalizedSchema.className}RepositoryImpl` +
      output.colors.white`)` + output.colors.gray`,`,

    output.colors
      .gray`provideCreate${normalizedSchema.className}ServerUseCase` +
      output.colors.white`()` + output.colors.gray`,`,

    output.colors.gray`provideFind${normalizedSchema.className}ServerUseCase` +
      output.colors.white`()` + output.colors.gray`,`,

    output.colors.gray`provideFindOne${normalizedSchema.className}ServerUseCase` +
      output.colors.white`()` + output.colors.gray`,`,

    output.colors.gray`provideUpdate${normalizedSchema.className}ServerUseCase` +
      output.colors.white`()` + output.colors.gray`,`,

    output.colors.gray`provideRemove${normalizedSchema.className}ServerUseCase` +
      output.colors.white`()` + output.colors.gray`,`,

    output.colors.gray`provide${normalizedSchema.className}ServerFacade` +
      output.colors.white`()` + output.colors.gray`,`,
  ];

  output.addVerticalSeparator();
  output.note({ title: 'Providers:', bodyLines: providers });
}

export default entityGenerator;
