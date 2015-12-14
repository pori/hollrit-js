jest.dontMock('q');
jest.dontMock('../');

const request = require('request');
const send = require('../').send;

const response = "201";

const user = {
  userId: "authenticated userId",
  mobileServiceAuthenticationToken: "auth token good for long term, repeated use"
};

const tag = 'hollr';

const message = 'HollrIt!';

const error = "An error occurred. Contact hollrapp@gmail.com to report this problem in detail.";

describe('send', function() {
  pit('successfully sends a hollr.', function() {
    request.__defineBody(response);

    return send(user, tag, message).then(function(user) {
      expect(user).toBeDefined();
      expect(user).toEqual(user);
    });
  });

  pit('fails to send a hollr.', function() {
    request.__defineBody(response);

    return send(user, tag, message).then(function(user) {
      expect(user).toBeDefined();
      expect(user).toEqual(user);
    });
  });
});
