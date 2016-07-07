//
// export class HelloWorld() {
//
//
// }

function HelloWorld() {

}

HelloWorld.prototype.hello = function (name) {
  let returnString = 'Hello, World!';
  if (name) {
    returnString = ('Hello, ' + name + '!');
  }
  return returnString;
};

module.exports = HelloWorld;
