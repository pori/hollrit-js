# HollrIt.js

JavaScript SDK for [HollrIt](http://hollr.it/), a simple notification messaging app.

# Requirements

Node.js version `4.0` or greater.

# Installation

    npm install hollrit

# Example

    const hollrit = require('hollrit');
    const login = hollrit.login;
    const send = hollrit.send;

    login('username', 'password').then(function(currentUser) {
      send(currentUser, 'hollr', 'Hello world!');
    });

# Documentation

## login(username, password)

Authenticates a user.

    hollrit.login('username', 'password').then(function(currentUser) {
      console.log(currentUser);
    });

## send(user, tag, message)

Sends a hollr via a tag that the user owns.

    hollrit.send(currentUser, 'tagYouOwn', 'Message you want to send.').then(function(status) {
      console.log(status);
    });

# License

MIT
