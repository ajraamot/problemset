
function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function () {
  console.log(this.year, ' mod 4 equals ', (this.year % 4));
  if (this.year % 4 !== 0) {
    return false;
  } else if (this.year % 400 === 0) {
    return true;
  } else if (this.year % 100 === 0) {
    return false;
  }
  return true;
};

module.exports = Year;
