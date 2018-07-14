import { compile } from './compile';
import { parse } from './parse';
import { ParseOptions, Type } from './types';

const DEFAULT_OPTIONS: ParseOptions = {};

export const parseSchema = (
  key: string,
  schema: Type,
  options = DEFAULT_OPTIONS,
) => {
  const ast = parse(key, schema, options);
  return compile(ast);
};
