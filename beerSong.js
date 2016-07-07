
function BeerSong() {

}

BeerSong.prototype.verse = function (number) {
  switch (number) {
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    case 1:
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    default:
      return (number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ' + (number-1) + ' bottles of beer on the wall.\n');
  }
}

BeerSong.prototype.sing = function (start, end) {
  let verses = '';
  if (end === '') {
    end = 0;
  }
  if (start < end) {
    const temp = start;
    start = end;
    end = temp;
  }
  for (let i = start; i >= end; i--) {
    console.log('************************ in beerSong for loop, i=', i);
    verses += this.verse(i);
    console.log(verses);
    if (i > 0) {
      verses += '\n';
    }
  }
  return verses;
};

module.exports = BeerSong;
