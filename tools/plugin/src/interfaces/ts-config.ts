export interface TSConfig {
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
  baseUrl: string;
  paths: { [key: string]: string[] };
}

export interface Reference {
  path: string;
}
