var assert = require('./assert');
var chalk = require('chalk');
var Note = require('/pathtonotes')

var note;
var spacer = 0;

function describe(title, callback) {
  console.log(chalk.magenta(' '.repeat(spacer) + title + ' 🐐'));
  callback();
}

function it(title, callback) {
  // note = new Note(); - basically beforeEach functions here
  callback(title);
}

// describe('circle', function () {
//   describe('radius', function () {
//     it('defaults to 10', function (title) {
//       assert.isTrue(title, circle.radius == 10);
//     });
//   });
// });
