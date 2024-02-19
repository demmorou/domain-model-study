import { User } from '../user/user'

export interface UserRepository {
  save(user: User): Promise<void>
  list(): Promise<User[]>
  get(userId: string): Promise<User>
  update(user: User): Promise<void>
}
