import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
});
