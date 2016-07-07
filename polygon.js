// export class Polygon {
//   constructor(height, width) {
//     this.height = height * 1;
//     this.width = width * 1;
//   }
//   get area() {
//     return (this.height * this.width);
//   }
// }

function Polygon(height, width) {
  console.log('in constructor');
  this.height = height * 1;
  this.width = width * 1;
}

Polygon.prototype.area = function() {
  console.log('in area');
  return (this.height * this.width);
};

Polygon.getAreaStatically = (height, width) => {
  console.log('in getAreaStatically, h =', height, ', and w =', width);
  return (height * width);
};

// Polygon.outputInfo = function outputInfo() {
Polygon.outputInfo = function() {
  console.log('in Polygon\'s static method outputInfo');
  return 'foo';
};

// Creates the correct array, but the test still fails
Polygon.fullNames = (arrayOfObjects) => {
  return arrayOfObjects.map((object) => `${object.firstName} ${object.lastName}`);
  // const returnArray = arrayOfObjects.map((object) => `${object.firstName} ${object.lastName}`);
  // console.log(returnArray);
  // return returnArray;
};

module.exports = Polygon;
