import { Name } from './name'
import { Password } from './password'

type UserProps = {
  name: string
  password: string
}

export class User {
  private password: Password
  private name: Name

  constructor(props: UserProps) {
    this.name = Name.build(props.name)
    this.password = Password.build(props.password)
  }

  get getPassword(): string {
    return this.password.value
  }

  set setPassword(newPassword: string) {
    this.password = Password.build(newPassword)
  }

  get getName() {
    return this.name.value
  }

  static build(props: UserProps) {
    return new User(props)
  }
}
