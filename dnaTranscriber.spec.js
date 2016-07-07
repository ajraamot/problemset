const expect = require('chai').expect;
const DnaTranscriber = require('../lib/dnaTranscriber');
const dnaTranscriber = new DnaTranscriber();

describe('toRna()', function() {

  it('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).to.equal('G');
  });

  it('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).to.equal('C');
  });

  it('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).to.equal('U');
  });

  it('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).to.equal('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .to.equal('UGCACCAGAAUU');
  });
});
