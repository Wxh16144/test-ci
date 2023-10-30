// eslint-disable-next-line import/no-extraneous-dependencies
const isCI = require('is-ci');
const path = require('path');

// https://github.com/react-component/
const rcOrg = ['@rc-component/', 'rc-'];
const check = ['@ant-design/', ...rcOrg];

module.exports = {
  packageFile: path.resolve(__dirname, './package.json'),
  upgrade: isCI, // or `npx npm-check-updates -u`
  target: 'latest', // always latest
  packageManager: 'npm',
  // https://github.com/raineorshine/npm-check-updates#filter
  filter: (name) => check.some((prefix) => name.startsWith(prefix)),
};
