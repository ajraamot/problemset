function Gigasecond(inputDate) {
  this.inputDate = inputDate;
}

Gigasecond.prototype.date = function () {
  return new Date(this.inputDate.getTime() + Math.pow(10, 12));
};

module.exports = Gigasecond;
