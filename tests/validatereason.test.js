const { validateReason } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateReason', (t) => {
  validateReason('hi', (err, res) => {
    t.ok(res);
  });
  validateReason(['r2'], (err, res) => {
    t.ok(err);
  });
  validateReason('', (err, res) => {
    t.ok(err);
  });
  t.end();
})
