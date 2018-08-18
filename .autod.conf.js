'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg'
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
};
