import { Alias, defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';

import * as jsconfig from './jsconfig.paths.json';

function readAliasFromJsConfig() {
  const pathReplaceRegex = new RegExp(/\/\*$/, '');
  return Object.entries(jsconfig.compilerOptions.paths).reduce(
    (aliases, [fromPaths, toPaths]) => {
      const find = fromPaths.replace(pathReplaceRegex, '');
      const toPath = toPaths[0].replace(pathReplaceRegex, '');
      const replacement = path.resolve(__dirname, toPath);
      aliases.push({ find, replacement });
      return aliases;
    },
    [],
);
}

export default defineConfig({
  resolve: {
    alias: readAliasFromJsConfig()
  },
  plugins: [reactRefresh()]
})
