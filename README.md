# china-mobile-phone-regexp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/china-mobile-phone-regexp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/china-mobile-phone-regexp
[travis-image]: https://img.shields.io/travis/node-modules/china-mobile-phone-regexp.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/china-mobile-phone-regexp
[codecov-image]: https://img.shields.io/codecov/c/github/node-modules/china-mobile-phone-regexp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/node-modules/china-mobile-phone-regexp?branch=master
[david-image]: https://img.shields.io/david/node-modules/china-mobile-phone-regexp.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/china-mobile-phone-regexp
[snyk-image]: https://snyk.io/test/npm/china-mobile-phone-regexp/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/china-mobile-phone-regexp
[download-image]: https://img.shields.io/npm/dm/china-mobile-phone-regexp.svg?style=flat-square
[download-url]: https://npmjs.org/package/china-mobile-phone-regexp

[The regular expressions](https://github.com/fengmk2/ChinaMobilePhoneNumberRegex) for China mobile phones.

## Install

```bash
$ npm i china-mobile-phone-regexp --save
```

## Usage

```js
const phone = require('china-mobile-phone-regexp');
// Is phone number?
console.log(phone.is('13800138000'));

// Is CHINA_MOBILE phone number?
console.log(phone.is('13800138000', phone.CHINA_MOBILE));

// Is CHINA_UNICOM phone number?
console.log(phone.is('13800138000', phone.CHINA_UNICOM));

// Is CHINA_TELECOM phone number?
console.log(phone.is('13800138000', phone.CHINA_TELECOM));
```

## Questions & Suggestions

Please open an issue [here](https://github.com/node-modules/china-mobile-phone-regexp/issues).

## License

[MIT](LICENSE)
