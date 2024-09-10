export interface TSConfigLibrary {
  extends: string;
  compilerOptions: CompilerOptions;
  files: string[];
  include: string[];
  references: Reference[];
}

interface CompilerOptions {
  module: string;
  forceConsistentCasingInFileNames: boolean;
  strict: boolean;
  noImplicitOverride: boolean;
  noPropertyAccessFromIndexSignature: boolean;
  noImplicitReturns: boolean;
  noFallthroughCasesInSwitch: boolean;
  strictPropertyInitialization?: boolean;
}

export interface Reference {
  path: string;
}
