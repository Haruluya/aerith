import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },

  routes,

  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
  favicon: '/favicon.ico',
  title:'Aerith',
  sass: {},

  proxy: {
    '/aerithi': {
      'target': 'http://localhost:8001/aerithi',
      'changeOrigin': true,
      'pathRewrite': { '^/aerithi' : '' },
    },
  },


  // mfsu: {}

});
