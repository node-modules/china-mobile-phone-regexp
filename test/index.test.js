'use strict';

const assert = require('assert');
const utility = require('utility');
const phone = require('..');

describe('test/index.test.js', () => {
  describe('ALL', () => {
    phone.CHINA_MOBILE_PREFIXS.forEach(prefix => genIT(prefix));
    phone.CHINA_UNICOM_PREFIXS.forEach(prefix => genIT(prefix));
    phone.CHINA_TELECOM_PREFIXS.forEach(prefix => genIT(prefix));
  });

  describe('CHINA_MOBILE', () => {
    it('should work with country code', () => {
      assert(phone.is('13800000000', phone.CHINA_MOBILE));
      assert(phone.is(genNumber('138'), phone.CHINA_MOBILE));
      assert(phone.is('08613800000000', phone.CHINA_MOBILE));
      assert(phone.is('008613800000000', phone.CHINA_MOBILE));
      assert(phone.is('+8613800000000', phone.CHINA_MOBILE));
      assert(phone.is('+08613800000000', phone.CHINA_MOBILE));
      assert(phone.is('+008613800000000', phone.CHINA_MOBILE));

      assert(!phone.is('+008813800000000', phone.CHINA_MOBILE));
      assert(!phone.is('+008618600000000', phone.CHINA_MOBILE));
    });

    phone.CHINA_MOBILE_PREFIXS.forEach(prefix => genIT(prefix, phone.CHINA_MOBILE));
  });

  describe('CHINA_UNICOM', () => {
    phone.CHINA_UNICOM_PREFIXS.forEach(prefix => genIT(prefix, phone.CHINA_UNICOM));
  });

  describe('CHINA_TELECOM', () => {
    phone.CHINA_TELECOM_PREFIXS.forEach(prefix => genIT(prefix, phone.CHINA_TELECOM));
  });

  describe('MVNO', () => {
    phone.MVNO_PREFIXS.forEach(prefix => genIT(prefix, phone.MVNO));
  });

  describe('SATELLITE', () => {
    phone.SATELLITE_PREFIXS.forEach(prefix => genIT(prefix, phone.SATELLITE));
  });

  describe('DATA', () => {
    phone.DATA_PREFIXS.forEach(prefix => genIT(prefix, phone.DATA));
  });
});

function genIT(prefix, regexp) {
  it(`should match ${prefix}`, () => {
    const splits = prefix.split('/');
    const first = splits[0];
    const len = first.length - 1;
    for (let i = 0; i < splits.length; i++) {
      let p = splits[i];
      if (i > 0) {
        p = `${first.substring(0, len)}${p}`;
      }
      console.log('%s => %s', p, genNumber(p));
      genNumbers(p).forEach(n => assert(phone.is(n, regexp)));

      if (regexp === phone.CHINA_MOBILE) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_UNICOM)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_TELECOM)));
      } else if (regexp === phone.CHINA_UNICOM) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_MOBILE)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_TELECOM)));
      } else if (regexp === phone.CHINA_TELECOM) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_MOBILE)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.CHINA_UNICOM)));
      }

      if (regexp === phone.MVNO) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.SATELLITE)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.DATA)));
      } else if (regexp === phone.SATELLITE) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.MVNO)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.DATA)));
      } else if (regexp === phone.DATA) {
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.MVNO)));
        genNumbers(p).forEach(n => assert(!phone.is(n, phone.SATELLITE)));
      }
    }
  });
}

function genNumbers(prefix, count) {
  count = count || 10000;
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(genNumber(prefix));
  }
  return numbers;
}

function genNumber(prefix) {
  prefix = prefix || '1';
  return prefix + utility.randomString(11 - prefix.length, '0123456789');
}
