import test from 'ava'
import nock from 'nock'
import HollrIt from '../lib'

const username = 'billy'
const password = 'secret'

const body = { username, password }

const currentUser = {
  userId: 'authenticated userId',
  mobileServiceAuthenticationToken: 'auth token good for long term, repeated use' 
}

nock('https://hollrit.azurewebsites.net')
  .post('/api/User', body)
  .reply(200, currentUser)

test('start a client with no data', t => {
  let client = HollrIt(username, password)

  t.is(client.user(), undefined)
})

test('login with no cache', async t => {
  let client = HollrIt(username, password)

  await client.login()

  t.deepEqual(client.user(), currentUser)
})

test('start a client with a token cache', async t => {
  let client = HollrIt(null, null, { currentUser })

  t.is(client.user(), currentUser)
})
