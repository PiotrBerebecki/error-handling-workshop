const { validateName } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateName', (t) => {
  validateName('us&er', (err, res) => {
    t.ok(err);
  });
  validateName("us'P-er", (err, res) => {
    t.ok(res);
  });
  t.end();
});
