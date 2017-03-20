const querystring = require('querystring');
const { validateName, validateAge, validateEmail, validateReason } = require('./modules');

const router = (request, response) => {

  if (request.url === '/submit' && request.method === 'POST') {
    let data = '';

    request.on('data', (chunk) => {
      data += chunk;
    });

    request.on('end', () => {
      const post = querystring.parse(data);

      const { name, age, email, reason } = post;
      const postArr  = [name, Number(age), email, reason];

      response.writeHead(200, { 'Content-Type': 'text/html' });

      [validateName, validateAge, validateEmail, validateReason].forEach((validation, idx) => {
        validation(postArr[idx], (err, res) => {
          if (err) {
            response.end('invalid input');
          }
        });
      });

      response.end('thank you');

    });
  }
};

module.exports = router;
