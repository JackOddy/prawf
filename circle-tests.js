var assert = require('./assert');
var chalk = require('chalk');

function Circle() {
  this.radius = 10;
}

var circle;
var spacer = 0

function test(title, callback) {
  console.log(chalk.magenta(' '.repeat(spacer) + title + ' 🐐'));
  spacer += 4
  callback();
}

function it(title, callback) {
  circle = new Circle();
  return callback(title);
}

test('circle', function () {
  test('radius', function () {
    it('defaults to 10', function (title) {
      assert.isTrue(title, circle.radius == 10);
    });
    it('updates when added to', function (title) {
      circle.radius = 11;
      assert.isTrue(title, circle.radius == 11);
    });
    it('defaults to 10', function (title) {
      assert.isTrue(title, circle.radius == 10);
    });
    it('subtracts when subracted to', function (title) {
      circle.radius -= 9;
      assert.isTrue(title, circle.radius == 1);
    });
    it('shows a failing test when the test fails', function (title) {
      assert.isTrue(title, circle.radius == 1);
    });
  });
});
