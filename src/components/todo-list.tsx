// Import dependencies
import * as React from 'react'

// Import TodoItem
import TodoItem from './todo-item'

// Import interfaces
import { TodoListInterface } from '../interfaces/interfaces'

function computeVisible (visibilityFilter: string, isCompleted: boolean ): string {
    let className = 'show-todo-item';
    if ((visibilityFilter === 'open' && isCompleted) || (visibilityFilter === 'done' && !isCompleted)) {
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
              id={todo.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList
