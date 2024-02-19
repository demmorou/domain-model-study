import assert from 'node:assert'
import { describe, it } from 'node:test'

import { User } from './user'

describe('User', () => {
  it('should be able create an user', () => {
    const input = {
      name: 'Mary',
      password: 'Mary1234',
    }

    const user = User.build(input)
    console.log({ user })

    assert.equal(user.getName, input.name)
    // assert.
  })
})
