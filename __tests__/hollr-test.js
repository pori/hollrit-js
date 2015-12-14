jest.dontMock('../');

const hollr = require('../').hollr;

const currentUser = {
  userId: "authenticated userId",
  mobileServiceAuthenticationToken: "auth token good for long term, repeated use"
};

const tag = 'hollr';

const text = 'HollrIt!';

const body = {
  currentUser: currentUser,
  tag: tag,
  text: text
};

describe('hollr', function() {
  it('provides a hollr object', function() {
    expect(hollr(currentUser, tag, text)).toEqual(body);
  });
});
