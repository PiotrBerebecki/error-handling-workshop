// @TODO: Build validateEmail
// String (valid email address)
const validateEmail = (input, cb) => {
  if (
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(input)
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid email'));
  }
};

module.exports = validateEmail;
