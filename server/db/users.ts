import connection from './connection'
import * as UserModels from '../../models/users'

const db = connection

export function getAllUsers() {
  return db('users').select()
}

export function getUserById(id: number) {
  return db('users').select().where({ id })
}

export function addUser(newUser: UserModels.New) {
  return db('users').insert(newUser).returning('*')
}

export function updateUser(id: number, newUser: UserModels.Update) {
  const { f_name, l_name, profile_image, email } = newUser
  return db('users')
    .select()
    .where({ id })
    .first()
    .update({
      f_name,
      l_name,
      profile_image,
      email,
    })
    .returning('*')
}

export function delUser(id: number) {
  return db('users').delete().where({ id })
}
