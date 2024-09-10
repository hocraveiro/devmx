export interface EntityGeneratorSchema {
  name: string;
  domain: string;
  dataSource: string;
  resource?: string;
}

export interface NormalizedEntityGeneratorSchema extends EntityGeneratorSchema {
  fileName: string;
  className: string;
  propertyName: string;
  fileNamePlural: string;
  classNamePlural: string;
  propertyNamePlural: string;
}
