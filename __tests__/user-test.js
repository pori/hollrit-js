jest.dontMock('../');

const user = require('../').user;

describe('user', function() {
  it('provides a user object', function() {
    expect(user('userId', 'token')).toEqual({ userId: 'userId', mobileServiceAuthenticationToken: 'token' });
  });
});
