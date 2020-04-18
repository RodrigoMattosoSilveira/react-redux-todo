// Import dependencies
import * as React from 'react'

// Import TodoItem
import TodoItem from './todo-item'

// Import interfaces
import { TodoListInterface } from './../interfaces/interfaces'

function computeVisible (visibilityFilter: string, isCompleted: boolean ): string {
    let className = 'show-todo-item';
    if ((visibilityFilter === 'open' && isCompleted === true) ||
        (visibilityFilter === 'done' && isCompleted === false)) {
        className = 'hide-todo-item';
    }
    return className;
}

// TodoList component
const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id} className={computeVisible(props.visibilityFilter, todo.isCompleted)}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList
