// @TODO: Build validateReason
// String (any non-empty string of any length)
const validateReason = (input, cb) => {
  if (typeof input !== 'string') {
    cb(new Error('Please stop trying to break my server'));
  } else if (input.length === 0) {
    cb(new Error('Please enter your reason'));
  } else {
    cb(null, true);
  }
};

module.exports = validateReason;
