const { validateAge } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateAge', (t) => {
  validateAge(14, (err, res) => {
    t.ok(err);
  })
  validateAge(20, (err, res) => {
    t.ok(res);
  })
  t.end();
})
