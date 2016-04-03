const tsc = require('typescript');
const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(src, path) {
    if (path.endsWith('.less') || path.endsWith('.css')) {
      return 'module.exports = {}';
    }

    if (path.endsWith('.js')) {
      return babel.transform(src, {
        auxiliaryCommentBefore: ' istanbul ignore next ',
        filename: path,
        presets: [jestPreset, 'react', 'es2015', 'stage-0'],
        retainLines: true,
      }).code;
    }

    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
        },
        path,
        []
      );
    }
    return src;
  },
};