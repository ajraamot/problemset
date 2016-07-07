
function DnaTranscriber() {

}

DnaTranscriber.prototype.toRna = (nucleotides) => {
  const dnaArray = nucleotides.split('');
  let rnaString = '';
  dnaArray.forEach((element) => {
    switch (element) {
      case 'G':
        rnaString += 'C';
        break;
      case 'C':
        rnaString += 'G';
        break;
      case 'T':
        rnaString += 'A';
        break;
      case 'A':
        rnaString += 'U';
        break;
      default:
    }
  });

  // // TODO: CODE BELOW DOESN'T WORK - Problem apparently with switch case statement
  // rnaString = dnaArray.reduce((prevValue, curValue, curIndex) => rnaString + ({
  //   switch (curValue) {
  //     case 'G':
  //       return 'C';
  //     case 'C':
  //       return 'G';
  //     case 'T':
  //       return 'A';
  //     case 'A':
  //       return 'U';
  //     default:
  //       return '';
  //   }
  // });

  return rnaString;
};

module.exports = DnaTranscriber;
