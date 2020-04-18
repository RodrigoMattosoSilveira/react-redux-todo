import { TODO_ACTIONS } from '../reference/references';
import { TodoActionInterface } from '../interfaces/interfaces';

export const todo_add = (text: string): TodoActionInterface => ({
  type: TODO_ACTIONS.CREATE,
  text: text
})

export const todo_toggle = (id: string): TodoActionInterface => ({
  type: TODO_ACTIONS.TOGGLE,
  id: id
})
export const todo_update = (id: string, text: string): TodoActionInterface => ({
  type: TODO_ACTIONS.UPDATE,
  id: id,
  text: text
})
export const todo_delete = (id: string): TodoActionInterface => ({
  type: TODO_ACTIONS.DELETE,
  id: id
})
