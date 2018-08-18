'use strict';

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const lookahead = /^(?=\d{11}$)^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
const normal = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;

console.log(normal.test('18668079069'), normal.test('1866807906a'));
console.log(lookahead.test('18668079069'), lookahead.test('1866807906a'));

// add tests
suite.add('normal', function() {
  normal.test('18668079069');
  normal.test('1866807906a');
  normal.test('1');
  normal.test('a');
})
  .add('enable lookahead', function() {
    lookahead.test('18668079069');
    lookahead.test('1866807906a');
    normal.test('1');
    normal.test('a');
  })
// add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
// run async
  .run({ async: true });
