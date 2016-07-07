function Pangram (sentence) {
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function () {
  const sentenceArray = (this.sentence.toLowerCase()).split('').sort();
  const alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    for (let j = 0; j < alphaArray.length; j++) {
      if (sentenceArray[i] === alphaArray[j]) {
        alphaArray[j] = '';
        break;
      }
    }
  }
  const alphaString = alphaArray.toString().replace(/(,*)/g, '');
  console.log(alphaString);
  if (alphaString === '') {
  	return true;
  } else {
  	return false;
  }
}

module.exports = Pangram;


/*
was also trying to do this using a reducer to get rid of duplicate letters, maybe something like:

const sentence = "how much wood would a woodchuck chuck if a woodchuck would chuck wood";
const sentenceArray = (sentence.toLowerCase().replace(' ', '')).split('').sort();
const reducedArray = sentenceArray.reduce((prev, curr, currIndex, sentenceArray) => {
	let newArray;
	(prev != curr) ? newArray.push(curr) : '';
	return newArray;
});
console.log(reducedArray);
*/
