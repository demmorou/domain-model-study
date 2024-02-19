import assert from 'node:assert'
import { describe, it } from 'node:test'

import { Password } from './password'

describe('Password', () => {
  it('should be able create a valid password', () => {
    const input = 'Teste123'

    const password = Password.build(input)
    assert.equal(password.value, input)
  })

  it('should not be able create a password less than 8 characteres', () => {
    const input = 'Teste12'

    const buildPassword = () => Password.build(input)

    assert.throws(buildPassword, {
      message: 'Password must be longer than 8 characteres',
    })
  })

  it('should not be able create a password without at least one number', () => {
    const input = 'PasswordTest'

    const buildPassword = () => Password.build(input)

    assert.throws(buildPassword, {
      message: 'Password must have at least one number',
    })
  })

  it('should not be able create a password without at least one letter', () => {
    const input = '12345678'
    const buildPassword = () => Password.build(input)

    assert.throws(buildPassword, {
      message: 'Password must have at least one letter',
    })
  })
})
