// @TODO: Build validateName
// String (characters allowed: letter, dash, apostrophe. Must contain at least two letters)
const validateName = (input, cb) => {
  if (/^(?=(.*[a-z])+)['\-a-z]+$/i.test(input)) {
    cb(null, true);
  } else {
    cb(new Error('Name can only use letters, apostrophes and hyphens.'));
  }
};

module.exports = validateName;
