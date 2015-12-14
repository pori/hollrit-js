jest.dontMock('../');

const credentials = require('../').credentials;

describe('credentials', function() {
  it('provides a credentials object', function() {
    expect(credentials('username', 'password')).toEqual({ username: 'username', password: 'password' });
  });
});
