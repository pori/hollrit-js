import test from 'ava'
import nock from 'nock'
import HollrIt from '../lib'

const currentUser = {
  userId: 'authenticated userId',
  mobileServiceAuthenticationToken: 'auth token good for long term, repeated use'
}

const tag = 'example'

const text = 'Example message.'

const body1 = {
  currentUser,
  tag,
  text,
}

nock('https://hollrit.azurewebsites.net')
  .post('/api/Hollr', body1)
  .reply(201, tag)

const webhookUrl = 'http://example.com/callback'

const webhookPayload = { foo: 'bar' }

const body2 = Object.assign({}, body1, {
  webhookUrl,
  webhookPayload
})

nock('https://hollrit.azurewebsites.net')
  .post('/api/Hollr', body2)
  .reply(201, tag) 

test('send a simple message', async t => {
  let client = HollrIt(null, null, { currentUser })

  let result = await client.send(tag, text) 

  t.deepEqual(result, tag)
})

test('send a hollr with a webhook & payload', async t => {
  let client = HollrIt(null, null, { currentUser })

  let result = await client.send(tag, text, { webhookUrl, webhookPayload })

  t.deepEqual(result, tag)
})
