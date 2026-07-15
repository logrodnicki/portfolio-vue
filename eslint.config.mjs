// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt([
  eslintPluginPrettierRecommended,
  {
    files: ['*.vue'],
    rules: {
      'vue/script-indent': [
        'error',
        2,
        {
          baseIndent: 2,
          switchCase: 2,
          ignores: [],
        },
      ],
    },
  },
]);
