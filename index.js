'use strict';

// Match all
// 全部
const ALL = /^1(?:3\d|4[04-9]|41(?=[1-9])|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;

// MVNO: 167, 170/1
// 虚拟运营商
const MVNO_PREFIXS = [
  '167',
  '170/1',
];
const MVNO = /^1(?:67|7[01])\d{8}$/;
const EXCLUDE_MVNO = /^1(?:3\d|4[4-9]|5[0-35-9]|66|7[3-8]|8\d|9\d)\d{8}$/;

// SATELLITE: 1349, 17400/1/2/3/4/5, 1749
// 卫星电话
const SATELLITE_PREFIXS = [
  '1349',
  '17400/1/2/3/4/5',
  '1749',
];
const SATELLITE = /^1(?:349|749|740(?=[0-5]))\d{7}$/;
const EXCLUDE_SATELLITE = /^1(?:3(?!49)\d|4[4-9]|5[0-35-9]|6[67]|7[0135-8]|8\d|9\d)\d{8}$/;

// DATA: 144/5/6/7/8/9
// 数据卡
const DATA_PREFIXS = [
  '144/5/6/7/8/9',
];
const DATA = /^1(?:4[4-9])\d{8}$/;
const EXCLUDE_DATA = /^1(?:3\d|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;

const CHINA_MOBILE_PREFIXS = [
  '1340/1/2/3/4/5/6/7/8',
  '135/6/7/8/9',
  // 14410~14499 + 1440 => 144
  '144/7/8',
  '150/1/2/7/8/9',
  '1703/5/6',
  '178',
  '182/3/4/7/8',
  '198',
];
const CHINA_MOBILE = /^1(?:34(?=[0-8])|3[5-9]|4[478]|5[012789]|70(?=[356])|78|8[23478]|98)\d{8}$/;

const CHINA_UNICOM_PREFIXS = [
  '130/1/2',
  // 14000~14099 => 140
  '140',
  '145/6',
  '155/6',
  '167',
  '1704/7/8/9',
  '171/5/6',
  '185/6',
];
const CHINA_UNICOM = /^1(?:3[012]|4[056]|5[56]|67|70(?=[4789])|7[156]|8[56])\d{8}$/;

const CHINA_TELECOM_PREFIXS = [
  '133',
  '1349',
  // 14110~14199 => 1411/2/3/4/5/6/7/8/9
  '1411/2/3/4/5/6/7/8/9',
  '149',
  '153',
  '1700/1/2',
  '173/7',
  '17400/1/2/3/4/5',
  '180/1/9',
  '191/9',
];
const CHINA_TELECOM = /^1(?:33|34(?=9)|41(?=[1-9])|49|53|70(?=[012])|7[37]|74(?=0[0-5])|8[019]|9[19])\d{8}$/;

// +86
// 086
// 0086
// +0086
// +086
const COUNTRY_CODE = /^(\+?0{0,2}86)/;

module.exports = {
  ALL,
  CHINA_MOBILE,
  CHINA_UNICOM,
  CHINA_TELECOM,
  MVNO,
  EXCLUDE_MVNO,
  SATELLITE,
  EXCLUDE_SATELLITE,
  DATA,
  EXCLUDE_DATA,
  COUNTRY_CODE,

  MVNO_PREFIXS,
  SATELLITE_PREFIXS,
  DATA_PREFIXS,
  CHINA_MOBILE_PREFIXS,
  CHINA_UNICOM_PREFIXS,
  CHINA_TELECOM_PREFIXS,

  is(number, regexp) {
    regexp = regexp || ALL;
    if (number.length > 11) {
      const m = COUNTRY_CODE.exec(number);
      if (m) {
        number = number.substring(m[1].length);
      }
    }

    return number.length === 11 && regexp.test(number);
  },
};
