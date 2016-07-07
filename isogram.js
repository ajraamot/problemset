function Isogram(word) {
  this.word = word;
}

Isogram.prototype.isIsogram = function() {
  let tempWord = this.word.toLowerCase();
  tempWord = tempWord.replace(' ', '');
  tempWord = tempWord.replace(/(-*)/g, '');
  console.log('=========================', tempWord);
  const testArray = tempWord.split('');
  let isIsogram = true;
  for (let i = 0; i < testArray.length; i++) {
    for (let j = i + 1; j < testArray.length; j++) {
      if (testArray[i] === testArray[j]) {
        isIsogram = false;
        console.log('>>>>>>>>>>>>>>>>>, true:', testArray[i], '===', testArray[j]);
      }
    }
  }
  return isIsogram;
};

module.exports = Isogram;
