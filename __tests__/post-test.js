jest.dontMock('q');
jest.dontMock('../');

const post = require('../').post;

describe('post', function() {
  pit('returns a promise with body content.', function() {
    return post('http://example.com', {}).then(function(body) {
      expect(body).toBeDefined();
    });
  });
});
