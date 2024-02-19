import assert from 'node:assert'
import { describe, it } from 'node:test'

import { Name } from './name'

describe('Name', () => {
  it('should be able create a valid name', () => {
    const input = 'Mary Joe'

    const name = Name.build(input)

    assert.equal(name.value, input)
  })

  it('should not be able create a name with less than 2 characteres', () => {
    const input = 'M'

    const buildName = () => Name.build(input)

    assert.throws(buildName, {
      message: 'Name must be longer than 2 characteres',
    })
  })

  it('should not be able create a name with numbers', () => {
    const input = 'Mar1'

    const buildName = () => Name.build(input)

    assert.throws(buildName, { message: 'Name cannot contain numbers' })
  })

  it('should not be able create a name with special characteres', () => {
    const input = 'Mar@'

    const buildName = () => Name.build(input)

    assert.throws(buildName, { message: 'Name cannot contain special chars' })
  })
})
