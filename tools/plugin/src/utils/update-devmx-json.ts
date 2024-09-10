import { Tree, updateJson } from '@nx/devkit';
import { DevMXJson } from '../interfaces';

export const updateDevMXJson = <T extends DevMXJson>(
  tree: Tree,
  updater: (value: T) => T
) => {
  return updateJson<T>(tree, 'devmx.json', updater);
};
