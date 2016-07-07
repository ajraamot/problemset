const BeerSong = require('../lib/beerSong');
const expect = require('chai').expect;

describe('BeerSong', function() {
  const song = new BeerSong();

  it('prints an arbitrary verse', function() {
    const expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
    expect(song.verse(8)).to.equal(expected);
  });

  it('handles 1 bottle', function() {
    const expected = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    expect(song.verse(1)).to.equal(expected);
  });

  it('handles 0 bottles', function() {
    const expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.verse(0)).to.equal(expected);
  });

  xit('sings several verses', function() {
    const expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n';
    expect(song.sing(8, 6)).to.equal(expected);
  });

  xit('sings the rest of the verses', function() {
    const expected = '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.sing(3)).to.equal(expected);
  });
});
