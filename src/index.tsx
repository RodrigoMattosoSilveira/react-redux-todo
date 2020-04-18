// Import dependencies
import * as React from 'react'
import { render } from 'react-dom'

// Import components
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import VisibilityFilters from './components/visibility-filters';

// Import interfaces
import { TodoInterface } from './interfaces/interfaces'

// Import styles
import './styles/styles.css'

// TodoListApp component
const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  // const [todosFiltered, setTodosFiltered] = React.useState<TodoInterface[]>([])
  const [visibilityFilter, setVisibilityFilter] = React.useState<string>('all')

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    console.log('TodoApp.handleTodoCreate.todo = ' + JSON.stringify(todo));
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Update new todos state
    newTodosState.push(todo)

    // Update todos state
    setTodos(newTodosState)
    // handleVisibilityFilter(visibilityFilter);
    // updateTodosState(newTodosState, visibilityFilter);
}

  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

    // Update todos state
    setTodos(newTodosState)
    // updateTodosState(newTodosState, visibilityFilter);
  }

  // Remove existing todo item
  function handleTodoRemove(id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

    // Update todos state
    setTodos(newTodosState)
    // updateTodosState(newTodosState, visibilityFilter);
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    // Update todos state
    setTodos(newTodosState)
    // updateTodosState(newTodosState, visibilityFilter);
  }

  // function updateTodosState(ntdState: TodoInterface[], vFilter: string) {
  //   console.log('TodoApp.updateTodosState.ntdstate = ' + JSON.stringify(ntdState));
  //   console.log('TodoApp.updateTodosState.vFilter = ' + vFilter);
  //   console.log('TodoApp.updateTodosState.todos (before update) = ' + JSON.stringify(todos));
  //   setTodos(ntdState);
  //   console.log('TodoApp.updateTodosState.todos (after update) = ' + JSON.stringify(todos));
  //   handleVisibilityFilter(vFilter);
  // }

  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }

  function  handleVisibilityFilter (filter: string) {
    console.log('TodoApp.handleVisibilityFilter.Filter = ' + filter);
    setVisibilityFilter(filter);
    // let newTodosFiltered: TodoInterface[];
    // console.log('TodoApp.handleVisibilityFilter.todos = ' + JSON.stringify(todos));
    // switch (filter) {
    //     case 'all':
    //         newTodosFiltered = [...todos];
    //         break;
    //     case 'open':
    //         newTodosFiltered = todos.filter((todo: TodoInterface) => todo.isCompleted === false);
    //         break;
    //     case 'done':
    //         newTodosFiltered = todos.filter((todo: TodoInterface) => todo.isCompleted === true);
    //         break;
    //     default:
    //         newTodosFiltered = [...todos];
    //         break;
    //   }
    //   setTodosFiltered(newTodosFiltered);
    //   console.log('TodoApp.handleVisibilityFilter.newTodosUIState = ' + JSON.stringify(newTodosFiltered));
    //   console.log('TodoApp.handleVisibilityFilter.todosUI = ' + JSON.stringify(todosFiltered));
  }

  return (
    <div className="todo-list-app">
      <h1 className="todo-header">todo</h1>
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />

      <VisibilityFilters
        visibilityFilter={visibilityFilter}
        handleVisibilityFilter={handleVisibilityFilter}
      />

    </div>
  )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)
