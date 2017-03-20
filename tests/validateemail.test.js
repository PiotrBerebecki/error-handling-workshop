const { validateEmail } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateEmail', (t) => {
  validateEmail('oli@abc.com', (err, res) => {
    t.ok(res);
  });
  validateEmail('oli@abc', (err, res) => {
    t.ok(err);
  });
  validateEmail('@abc', (err, res) => {
    t.ok(err);
  });
  validateEmail('@', (err, res) => {
    t.ok(err);
  });
  validateEmail('frfgsg', (err, res) => {
    t.ok(err);
  });
  validateEmail('f@r', (err, res) => {
    t.ok(err);
  });
  t.end();
});
