/* eslint-disable max-len */
function Hamming() {

}

// Attempt at using arrow function
Hamming.prototype.compute = (stringA, stringB) => {
  if (stringA.length !== stringB.length) {
    throw Error('DNA strands must be of equal length.');
  }
  const arrayA = stringA.split('');
  const arrayB = stringB.split('');
  const initValue = 0;
  const ham = arrayA.reduce((prevValue, curValue, curIndex) => prevValue + (curValue === arrayB[curIndex] ? 0 : 1), initValue);
//   for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       ham++;
//     }
//   }
  return ham;
};

// // WITHOUT USING ARROW FUNCTION
// Hamming.prototype.compute = function (stringA, stringB) {
//   if (stringA.length !== stringB.length) {
//     throw Error('DNA strands must be of equal length.');
//   }
//   const arrayA = stringA.split('');
//   const arrayB = stringB.split('');
//   const initValue = 0;
//   const ham = arrayA.reduce( (prevValue, curValue, curIndex, arrayA) => prevValue + (curValue === arrayB[curIndex] ? 0 : 1 ), initValue);
// // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//   // for (let i = 0; i < arrayA.length; i++) {
//   //   if (arrayA[i] !== arrayB[i]) {
//   //     ham++;
//   //   }
//   // }
//   return ham;
// };

module.exports = Hamming;
