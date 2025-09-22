import { transformSync } from '@babel/core';

function createDefaultResolver(/* config */) {
  return (specifier) => specifier;
}

export function runTransform(code, options = {}) {
  const {
    isSource = true,
    extract = false,
    config = {},
    filename = 'fixture.js',
    emitCode = false,
  } = options;

  const includedFiles = [];

  const plugins = [
    ...(config.transformerBabelPlugins ?? []),
    isSource && [
      '@compiled/babel-plugin',
      {
        ...config,
        classNameCompressionMap: config.extract && config.classNameCompressionMap,
        onIncludedFiles: (files) => includedFiles.push(...files),
        resolver: config.resolver ? config.resolver : createDefaultResolver(config),
        cache: false,
      },
    ],
    extract && [
      '@compiled/babel-plugin-strip-runtime',
      {
        compiledRequireExclude: true,
        extractStylesToDirectory: config.extractStylesToDirectory,
      },
    ],
  ].filter(Boolean);

  const result = transformSync(code, {
    code: Boolean(emitCode),
    ast: !emitCode,
    filename,
    babelrc: false,
    configFile: false,
    sourceMaps: Boolean(config.sourceMap),
    compact: false,
    parserOpts: {
      plugins: config.parserBabelPlugins ?? [
        'jsx',
        'typescript',
        ['decorators', { legacy: true }],
        'classProperties',
        'classPrivateProperties',
        'classPrivateMethods',
        'importAttributes',
        'importAssertions',
        'dynamicImport',
        'topLevelAwait',
        'nullishCoalescingOperator',
        'optionalChaining',
      ],
    },
    plugins,
    caller: {
      name: 'compiled-compat-tests',
    },
  });

  return { result, includedFiles };
}
