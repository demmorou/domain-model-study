export class Password {
  private password: string

  constructor(value: string) {
    this.validate(value)

    this.password = value
  }

  private validate(password: string) {
    const PASSWORD_MIN_CHAR = 8
    if (password.length < PASSWORD_MIN_CHAR)
      throw new Error('Password must be longer than 8 characteres')

    const mustHaveNumberRegex = /\d+/g
    if (!password.match(mustHaveNumberRegex))
      throw new Error('Password must have at least one number')

    const mustHaveLetterRegex = /[A-Za-z]+/g
    if (!password.match(mustHaveLetterRegex))
      throw new Error('Password must have at least one letter')
  }

  get value(): string {
    return this.password
  }

  static build(value: string) {
    const password = new Password(value)

    return password
  }
}
