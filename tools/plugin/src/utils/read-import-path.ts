import { readJsonFile } from '@nx/devkit';
import { TSConfig } from '../interfaces';
import { keys } from './keys';

export const readImportPath = (sourceRoot: string) => {
  const { compilerOptions } = readJsonFile<TSConfig>('tsconfig.base.json');

  return keys(compilerOptions.paths).find((path) => {
    return compilerOptions.paths[path].find((path) =>
      path.includes(sourceRoot + '/index.ts')
    );
  }) as string;
};
