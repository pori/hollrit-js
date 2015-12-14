const Q = require('q');
const request = require('request');

// API Endpoints

const BASE = 'https://hollrit.azurewebsites.net/api/';
const USER_ENDPOINT = BASE + '/User';
const SEND_ENDPOINT = BASE + '/Hollr';

// Object models

/**
 *
 */
const user = (userId, token) => ({ userId: userId, mobileServiceAuthenticationToken: token });

module.exports.user = user;

/**
 *
 */
const credentials = (username, password) => ({ username: username, password: password });

module.exports.credentials = credentials;

/**
 *
 */
const hollr = (currentUser, tag, text) => ({ currentUser: currentUser, tag: tag, text: text });

module.exports.hollr = hollr;

// Utils

/**
 *
 */
function post(url, json) {
  'use strict';

  let deferred = Q.defer();

  request({
    url: url,
    method: 'POST',
    json: json
  }, function(err, req, res) {
    if (err) deferred.reject(err);
    else deferred.resolve(res);
  });

  return deferred.promise;
}

module.exports.post = post;

// API

/**
 *
 */
const login = (username, password) => post(USER_ENDPOINT, credentials(username, password));

module.exports.login = login;

/**
 *
 */
const send = (currentUser, tag, message) => post(SEND_ENDPOINT, hollr(currentUser, tag, message));

module.exports.send = send;
