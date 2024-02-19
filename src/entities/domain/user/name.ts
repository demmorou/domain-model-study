export class Name {
  private name: string

  constructor(name: string) {
    this.validate(name)

    this.name = name
  }

  private validate(name: string) {
    const MIN_NAME_LENGTH = 2
    if (name.length < MIN_NAME_LENGTH)
      throw new Error('Name must be longer than 2 characteres')

    const NO_NUMBER_REGEX = /^[^\d]+$/
    if (!name.match(NO_NUMBER_REGEX))
      throw new Error('Name cannot contain numbers')

    const NO_SPECIAL_CHARS_REGEX = /^[a-zA-Z\s]+$/
    if (!name.match(NO_SPECIAL_CHARS_REGEX))
      throw new Error('Name cannot contain special chars')
  }

  get value(): string {
    return this.name
  }

  static build(name: string) {
    return new Name(name)
  }
}
