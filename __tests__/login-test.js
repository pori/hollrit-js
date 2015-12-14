jest.dontMock('q');
jest.dontMock('../');

const request = require('request');
const login = require('../').login;

const user = {
  currentUser: {
    userId: "authenticated userId",
    mobileServiceAuthenticationToken: "auth token good for long term, repeated use"
  },
  tag: 'hollr',
  message: 'HollrIt!'
};

const error = {
  message: "An error has occurred."
};

describe('login', function() {
  pit('gives us a user object.', function() {
    request.__defineBody(user);

    return login('username', 'password').then(function(user) {
      expect(user).toBeDefined();
      expect(user).toEqual(user);
    });
  });

  pit('gives errors.', function() {
    request.__defineBody(error);

    return login('username', 'password').then(function(user) {
      expect(user).toBeDefined();
      expect(user).toEqual(error);
    });
  });
});
