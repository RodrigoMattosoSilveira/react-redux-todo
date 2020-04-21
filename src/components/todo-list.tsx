// Import dependencies
import * as React from 'react'
import { RootState } from '../reducers/rooReducer'
import {connect} from "react-redux";

// Import TodoItem
import TodoItem from './todo-item'

// Import interfaces
import { TodoInterface } from "../interfaces/interfaces";

function computeVisible (visibilityFilter: string, isCompleted: boolean ): string {
    let className = 'show-todo-item';
    if ((visibilityFilter === 'open' && isCompleted) || (visibilityFilter === 'done' && !isCompleted)) {
        className = 'hide-todo-item';
    }
    return className;
}

// interface OwnProps {
// }

function mapStateToProps (state: RootState) {
	return {
		todoList: state.todo_reducer.slice(0),
		visibilityFilter: state.visibility_filter_reducer
	};
}

const mapDispatchToProps = null

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
// type Props = StateProps & DispatchProps & OwnProps;
type Props = StateProps;

// TodoList component
const TodoList = (props: Props) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todoList.map((todo: TodoInterface) => (
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

export default connector(TodoList)
