import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const getDirname = (importMetaUrl: string) => {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = dirname(__filename);
  return __dirname;
};
