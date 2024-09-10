import { pluralize } from '../../../utils';
import { names } from '@nx/devkit';
import {
  EntityGeneratorSchema,
  NormalizedEntityGeneratorSchema,
} from '../schema';

export function normalizeSchema(
  schema: EntityGeneratorSchema
): NormalizedEntityGeneratorSchema {
  const { fileName, className, propertyName } = names(schema.name);
  const fileNamePlural = pluralize(fileName, 2);
  const classNamePlural = pluralize(className, 2);
  const propertyNamePlural = pluralize(propertyName, 2);

  return {
    ...schema,
    fileName,
    className,
    propertyName,
    fileNamePlural,
    classNamePlural,
    propertyNamePlural,
  };
}
