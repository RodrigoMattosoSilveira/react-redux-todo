// Import dependencies
import * as React from 'react'
import {connect} from "react-redux";

// Import interfaces
import { RootState } from '../reducers/rooReducer'
import { TodoInterface } from "../interfaces/interfaces";
import { todo_toggle, todo_update, todo_delete } from "../actions/todo-actions";


// type PropsFromRedux = ConnectedProps<typeof connector>
// interface Props extends PropsFromRedux {
// 	id: string
// }
interface OwnProps {
	id: string,
	handleTodoBlur: () => {}
}

function mapStateToProps (state: RootState, ownProps: OwnProps) {
	let todo: TodoInterface;
	const todoIndex = state.todo_reducer.findIndex(todo => todo.id === ownProps.id);
	todo = todoIndex > -1 ? state.todo_reducer[todoIndex] : state.todo_reducer[todoIndex];

	return { todo: todo }
}

const mapDispatchToProps = {
	todo_toggle: (id: string) => todo_toggle(id),
	todo_update: (id: string, text: string) => todo_update(id, text),
	todo_delete: (text: string) => todo_delete(text)
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps & OwnProps

// TodoItem component
const TodoItem = (props: Props) => {
  return (
    <div className='todo-item'>
      <div onClick={() => props.todo_toggle(props.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={() => props.todo_update(props.todo.id, props.todo.text)}
        />
      </div>
      <div className="item-remove" onClick={() => props.todo_delete(props.todo.id)}>
        ⨯
      </div>
    </div>
  )
}
export default connector(TodoItem)
