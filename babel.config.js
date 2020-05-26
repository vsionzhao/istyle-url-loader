const MIN_BABEL_VERSION = 7;

module.exports = (api) => {
  api.assertVersion(MIN_BABEL_VERSION);
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: '10.13.0',
          },
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-export-default-from', '@babel/plugin-syntax-export-default-from']
  };
};
