const expect = require('chai').expect;
const Hamming = require('../lib/hamming');

describe('Hamming', function () {
  const hamming = new Hamming();

  it('no difference between identical strands', function () {
    expect(hamming.compute('A', 'A')).to.be.equal(0);
  });

  it('complete hamming distance for single nucleotide strand', function () {
    expect(hamming.compute('A','G')).to.be.equal(1);
  });

  it('complete hamming distance for small strand', function () {
    expect(hamming.compute('AG','CT')).to.be.equal(2);
  });

  it('small hamming distance', function () {
    expect(hamming.compute('AT','CT')).to.be.equal(1);
  });

  it('small hamming distance in longer strand', function () {
    expect(hamming.compute('GGACG', 'GGTCG')).to.be.equal(1);
  });

  it('large hamming distance', function () {
    expect(hamming.compute('GATACA', 'GCATAA')).to.be.equal(4);
  });

  it('hamming distance in very long strand', function () {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).to.be.equal(9);
  });

  xit('throws error when strands are not equal length', function() {
    expect(function() { hamming.compute('GGACGGATTCTG', 'AGGAC'); }).to.throw(
      new Error('DNA strands must be of equal length.')
    );
  });

});
