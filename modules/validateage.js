// @TODO: Build validateAge
// Integer (must be greater than 16 but less than 80)
const validateAge = (age, cb) => {
  if (  typeof age === 'number' &&
               age >= 16 &&
               age <= 80 &&
    Math.floor(age) === age) {
    cb(null, true);
  } else {
    cb(new Error('Wrong input'));
  }
};

module.exports = validateAge;
