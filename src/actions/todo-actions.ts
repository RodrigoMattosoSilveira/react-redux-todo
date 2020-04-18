import { TODO_ACTION } from '../reference/todo-actions';
import { TodoActionInterface } from '../interfaces';

export const todo_add = (text: string): TodoActionInterface => ({
  type: TODO_ACTION.CREATE,
  text: text
})

export const todo_toggle = (id: string): TodoActionInterface => ({
  type: TODO_ACTION.TOGGLE,
  id: id
})
export const todo_update = (id: string, text: string): TodoActionInterface => ({
  type: TODO_ACTION.UPDATE,
  id: id,
  text: text
})
export const todo_delete = (id: string): TodoActionInterface => ({
  type: TODO_ACTION.DELETE,
  id: id
})
