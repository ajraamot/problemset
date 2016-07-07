const expect = require('chai').expect;
const Isogram = require('../lib/isogram');

describe('Isogram Test Suite', function () {
  it('duplicates', function () {
    const word = new Isogram('duplicates');

    expect(word.isIsogram()).to.equal(true);
  });

  it('eleven', function () {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).to.equal(false);
  });

  it('subdermatoglyphic', function () {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Alphabet', function () {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).to.equal(false);
  });

  it('thumbscrew-japingly', function () {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
    const word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Heizölrückstoßabdämpfung', function () {
    const word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).to.equal(true);
  });

  it('the quick brown fox', function () {
    const word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).to.equal(false);
  });

  it('Emily Jung Schwartzkopf', function () {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).to.equal(true);
  });
});
