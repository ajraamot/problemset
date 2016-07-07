const expect = require('chai').expect;
const Gigasecond = require('../lib/gigasecond');

describe('Gigasecond', function() {

  it('tells a gigasecond anniversary since midnight', function() {
    const gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
    const expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
    expect(gs.date()).to.deep.equal(expectedDate);
  });

  it('tells the anniversary is next day when you are born at night', function() {
    const gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14, 23, 59, 59)));
    const expectedDate = new Date(Date.UTC(2047, 4, 24, 1, 46, 39));
    expect(gs.date()).to.deep.equal(expectedDate);
  });

  it('even works before 1970 (beginning of Unix epoch)', function() {
    const gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45)));
    const expectedDate = new Date(Date.UTC(1991, 2, 27, 7, 0, 25));
    expect(gs.date()).to.deep.equal(expectedDate);
  });

  it('make sure calling "date" doesn\'t mutate value', function() {
    const gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45)));
    const expectedDate = new Date(Date.UTC(1991, 2, 27, 7, 0, 25));
    gs.date();
    expect(gs.date()).to.deep.equal(expectedDate);
  });
});
