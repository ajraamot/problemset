const expect = require('chai').expect;
const Words = require('../lib/words');

describe('count()', function() {
  const words = new Words();

  xit('counts one word', function() {
    const expectedCounts = { word: 1 };
    expect(words.count('word')).to.equal(expectedCounts);
  });

  xit('counts one of each', function() {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).to.equal(expectedCounts);
  });

  xit('counts multiple occurrences', function() {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish two fish red fish blue fish')).to.equal(expectedCounts);
  });

  xit('includes punctuation', function() {
    const expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(words.count('car : carpet as java : javascript!!&@$%^&')).to.equal(expectedCounts);
  });

  xit('includes numbers', function() {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words.count('testing 1 2 testing')).to.equal(expectedCounts);
  });

  xit('normalizes to lowercase', function() {
    const expectedCounts = { go: 3 };
    expect(words.count('go Go GO')).to.equal(expectedCounts);
  });

  xit('counts properly international characters', function() {
    const expectedCounts = { '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 };
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).to.equal(expectedCounts);
  });

  xit('counts multiline', function() {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\nworld')).to.equal(expectedCounts);
  });

  xit('counts tabs', function() {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\tworld')).to.equal(expectedCounts);
  });

  xit('counts multiple spaces as one', function() {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello  world')).to.equal(expectedCounts);
  });

  xit('does not count leading or trailing whitespace', function() {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(words.count('\t\tIntroductory Course      ')).to.equal(expectedCounts);
  });

  xit('handles properties that exist on Object’s prototype', function() {
    const expectedCounts = { reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, 'ok?': 1 };
    expect(words.count('reserved words like constructor and toString ok?')).to.equal(expectedCounts);
  });
});
