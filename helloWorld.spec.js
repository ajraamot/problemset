const expect = require('chai').expect;
const HelloWorld = require('../lib/helloWorld');

describe('Hello World', () => {
  const helloWorld = new HelloWorld();

  it('says hello world with no name', () => {
    expect(helloWorld.hello()).to.be.equal('Hello, World!');
  });

  it('says hello to bob', () => {
    expect(helloWorld.hello('Bob')).to.be.equal('Hello, Bob!');
  });

  it('says hello to sally', () => {
    expect(helloWorld.hello('Sally')).to.be.equal('Hello, Sally!');
  });
});
