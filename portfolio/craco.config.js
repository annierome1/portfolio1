const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ESLintPlugin({
          extensions: ['js', 'jsx'],
          emitWarning: true,
        }),
      ],
    },
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        const postcssLoaderRule = oneOfRule.oneOf.find(
          (rule) => rule.test && rule.test.toString().includes('css')
        );

        if (postcssLoaderRule) {
          const postcssLoader = postcssLoaderRule.use.find(
            (loader) =>
              loader.loader &&
              loader.loader.includes('postcss-loader')
          );

          if (postcssLoader) {
            postcssLoader.options = {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            };
          }
        }
      }

      return webpackConfig;
    },
  },
  eslint: {
    enable: true,
    mode: 'extends',
    loaderOptions: {
      eslintPath: require.resolve('eslint'),
    },
  },
};
