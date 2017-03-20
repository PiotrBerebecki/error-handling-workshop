const test = require('tape');
const shot = require('shot');

const router = require('../router');

const fakeRequests = [
  {method: 'POST', url: '/submit', payload: 'name=oli&age=26&email=oli@oli.com&reason=happy', responsePayload: 'thank you'},
    // invalid name
  {method: 'POST', url: '/submit', payload: 'name=o9&age=26&email=oli@oli.com&reason=happy', responsePayload: 'invalid input'},
    // invalid age
  {method: 'POST', url: '/submit', payload: 'name=oli&age=26.5&email=oli@oli.com&reason=happy', responsePayload: 'invalid input'},
    // invalid email
  {method: 'POST', url: '/submit', payload: 'name=oli&age=26&email=olioli.com&reason=happy', responsePayload: 'invalid input'},
    // invalid reason
  {method: 'POST', url: '/submit', payload: 'name=oli&age=26&email=oli@oli.com&reason=', responsePayload: 'invalid input'}
];


fakeRequests.forEach(request => {
  test('Routing tests', (t) => {
    shot.inject(router, { method: request['method'], url: request['url'], payload: request['payload']}, (res) => {
      t.equal(res.statusCode, 200, 'Status code should be 200');
      t.equal(res.payload, request['responsePayload']);
      t.end();
    });
  });
});
