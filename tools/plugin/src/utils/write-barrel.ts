import { Tree } from '@nx/devkit';
import { join } from 'node:path';

const notIndexFile = (name: string) => name !== 'index.ts';
const notSpecFile = (name: string) => !name.endsWith('spec.ts');

const listFiles = (tree: Tree, path: string) => {
  return tree.children(path).filter(notIndexFile).filter(notSpecFile);
};

export const writeBarrel = (tree: Tree, path: string) => {
  const files = listFiles(tree, path).map((file) => file.replace('.ts', ''));
  const exports = files.map(file => `export * from './${file}';`)
  const filePath = join(path, 'index.ts');
  tree.write(filePath, exports.join('\n'));
};
