const request = require('bespeak')

// api endpoints
const BASE = 'https://hollrit.azurewebsites.net/api'
const USER_ENDPOINT = BASE + '/User'
const SEND_ENDPOINT = BASE + '/Hollr'

/*
 * Creates an api client. 
 *
 * @param {string} username 
 * @param {string} password
 * @param {object} options - accepts a `currentUser` as by a successful login attempt.
 * @return {object} 
 */
function HollrIt (username, password, options = {}) {

  var currentUser; // authentication token

  if (options.currentUser) {
    currentUser = options.currentUser
  }

  /**
   * Gives the raw user authentication object.
   * 
   * @return {object}
   */
  function user () {
    return currentUser 
  }

  /**
   * Makes a login request, sets `currentUser` internally.
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
   * Sends a Hollr. Returns the tag upon success.
   *
   * @param {string} tag - unique tag owned by the user.
   * @param {string} text - message for subscribers to see.
   * @param {object} webhook - optional object with required `webhookUrl`, `webhookPayload` params.
   * @return {string} 
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
