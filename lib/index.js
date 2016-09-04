const request = require('bespeak')

const BASE = 'https://hollrit.azurewebsites.net/api'
const USER_ENDPOINT = BASE + '/User'
const SEND_ENDPOINT = BASE + '/Hollr'

/*
 *
 */
function HollrIt (username, password, options = {}) {

  var currentUser;

  if (options.currentUser) {
    currentUser = options.currentUser
  }

  /**
   *
   */
  function user () {
    return currentUser 
  }

  /**
   *
   */
  async function login () {
    let data = await request(USER_ENDPOINT, {
      method: 'POST'
    }, {
      username,
      password
    })

    let token = JSON.parse(data)

    currentUser = token
  }

  /**
   *
   */
  async function send (tag, text, webhook) {
    if (!user()) {
      await login()
    }

    let body = {
      currentUser,
      tag,
      text
    }

    if (webhook) {
      Object.assign(body, webhook)
    }

    let response = await request(SEND_ENDPOINT, {
      method: 'POST'
    }, body)

    return response
  }

  return {
    user,
    login,
    send
  }
}

module.exports = HollrIt
