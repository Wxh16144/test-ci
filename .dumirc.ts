// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/test-ci/' : '/';
const publicPath = process.env.GH_PAGES ? '/test-ci/' : '/';

export default defineConfig({
  base: basePath,
  publicPath,
});
