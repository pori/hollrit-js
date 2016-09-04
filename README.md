# HollrIt.js

[![Build Status](https://travis-ci.org/pori/hollrit.js.svg?branch=master)](https://travis-ci.org/pori/hollrit.js)
[![Coverage Status](https://coveralls.io/repos/github/pori/hollrit.js/badge.svg?branch=master)](https://coveralls.io/github/pori/hollrit.js?branch=master)

JS client for [HollrIt](http://hollr.it/).

# Install

```
npm install hollrit
```

# Example

```js
import hollrit from 'hollrit';

export default async function () {
  let client = hollrit('username', 'password');
  let response = await client.send('tag', 'message');
}
```

# API

## hollrit(username, password)

Create a new HollrIt client. 

```js
const client = hollrit('username', 'password');
```

## login()

Manually logs a client in, fetching a new user token.

```js
client.login()
```

## send(tag, message, webook)

Sends a message. Optionally, registers webhooks for success send.

```js
const response = await client.send('tag', 'message', {
  webhookUrl: 'http://example.com',
  webhookPayload: { foo: 'bar' }
});
```

# License

MIT

