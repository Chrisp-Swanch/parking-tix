import type { ThunkAction } from '../store'
import * as UserModels from '../../models/users'
import * as api from '../apis/users'
import { useParams } from 'react-router-dom'

// * SIMPLE ACTIONS

export const SET_USER = 'SET_USER'
export const ADD_USER = 'ADD_USER'
export const DEL_USER = 'DEL_USER'
export const UPD_USER = 'UPD_USER'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_USER; payload: UserModels.UserObj }
  | { type: typeof ADD_USER; payload: UserModels.New }
  | { type: typeof DEL_USER; payload: number }
  | { type: typeof UPD_USER; payload: UserModels.Update }
  | { type: typeof ERROR; payload: string }

export function setUser(user: UserModels.UserObj): Action {
  return {
    type: SET_USER,
    payload: user,
  }
}

export function delUser(id: number): Action {
  return {
    type: DEL_USER,
    payload: id,
  }
}

export function addUser(users: UserModels.New): Action {
  return {
    type: ADD_USER,
    payload: users,
  }
}

export function updateUser(user: UserModels.Update): Action {
  return {
    type: UPD_USER,
    payload: user,
  }
}

export function error(message: string): Action {
  return {
    type: ERROR,
    payload: message,
  }
}

// * THUNKS

export function getUser(userId: number): ThunkAction {
  return async (dispatch) => {
    try {
      // call the api function, which will access our server and db
      // and will return the user that matches the given id
      const user = await api.fetchUser(userId)
      dispatch(setUser(user))
    } catch (err) {
      console.error('oh oh, action bad', err)
    }
  }
}

export function deleteUserThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.deleteUser(id) //go to api -> which heads to back end, updates db
      dispatch(delUser(id)) // dispatches the simple action -> reducer change state
    } catch (err) {
      console.error('oh oh, action bad', err)
    }
  }
}

export function addUserThunk(user: UserModels.New): ThunkAction {
  return async (dispatch) => {
    try {
      const newUser = (await api.postUser(user)) as UserModels.New
      dispatch(addUser(newUser))
    } catch (err) {
      console.error('oh no, Go BACK', err)
    }
  }
}

export function updateUserThunk(
  id: number,
  newUser: UserModels.Update
): ThunkAction {
  return async (dispatch) => {
    try {
      await api.patchUser(id, newUser)
      dispatch(updateUser(newUser))
    } catch (err) {
      console.error('oh no, It did not update', err)
    }
  }
}
