/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Polygon = require('../lib/polygon');

describe('Polygon', () => {
  describe('constructor', () => {
    it('should construct a new Polygon object', () => {
      const p1 = new Polygon(3, 4);
      expect(p1.height).to.equal(3);
      expect(p1.width).to.equal(4);
    });
  });
  describe('#area', () => {
    it('should return the area of the polygon', () => {
      const p1 = new Polygon(3, 4);
      expect(p1.area()).to.equal(3 * 4);
    });
  });
  describe('.getAreaStatically', () => {
    expect(Polygon.getAreaStatically(4, 5)).to.equal(4 * 5);
  });
  describe('.someClassMethod', () => {
    it('should output to console that it is in a static method', () => {
      expect(Polygon.outputInfo()).to.equal('foo');
    });
  });
  // describe('.array stuff', () => {
  //   it('gets array of objects, returns array of strings', () => {
  //     const awesomeProgrammers = [
  //       { firstName: 'Kent', lastName: 'Beck' },
  //       { firstName: 'Martin', lastName: 'Fowler' },
  //       { firstName: 'Sandi', lastName: 'Metz' },
  //     ];
  //     const expectedArray = [ 'Kent Beck', 'Martin Fowler', 'Sandi Metz' ];
  //     expect(Polygon.fullNames(awesomeProgrammers)).to.equal(expectedArray);
  //   });
  // });
});
