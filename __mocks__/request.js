const request = jest.genMockFunction();

var body;

request.mockImplementation(function(opts, cb) {
  'use strict';

  let err = null,
    req = opts;

  cb(err, req, body || {});
});

request.__defineBody = function(res) {
  body = res;
}

module.exports = request;
