// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const basePath = process.env.GITHUB_ACTIONS ? '/test-ci/' : '/';
const publicPath = process.env.GITHUB_ACTIONS ? '/test-ci/' : '/';

export default defineConfig({
  base: basePath,
  publicPath,
});
