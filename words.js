
function Words() {

}

Words.prototype.count = function (inputString) {
  const inputArray = inputString.split(' ');
  const finalArray = inputArray.reduce(function (prevWord, curWord, curIndex, inputArray) {
    const reducedArray = [];
    let numberFound = 1;
//    let alreadyPushed = false;
    for (let i = curIndex + 1; i < inputArray.length; i++) {
      if (inputArray[curIndex] === inputArray[i]) {
        numberFound++;
      }
    }
    let previouslyFound = false;
    for (let i = 0; i < curIndex; i++) {
      if (inputArray[curIndex] === inputArray[i]) {
        previouslyFound = true;
      }
    }
    if (previouslyFound === false) {
      reducedArray.push({ word: curWord, count: numberFound });
//      reducedArray.push({ curWord: numberFound });
    }
    console.log(reducedArray);
  });
  return finalArray;
};

module.exports = Words;

/*
Words.prototype.count = function (text) {
  const returnObject = {};
  cleanString(text).split(' ').map(v => {
    const val = v.toLowerCase();
    if (returnObject[val]) {
      returnObject[val] = returnObject[val] + 1;
    } else {
      returnObject[val] = 1;
    }
  });
  return returnObject;
};
*/
