// Next's ESLint plugin only calls globSync with onlyDirectories.
// Preserve fast-glob's behavior without its unpatched braces dependency.
// CommonJS is required by the consuming ESLint plugin.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { globSync: tinyGlobSync } = require('tinyglobby');

exports.globSync = (patterns, options = {}) =>
  tinyGlobSync(patterns, { ...options, expandDirectories: false }).map((path) =>
    options.onlyDirectories ? path.replace(/\/$/, '') : path,
  );
