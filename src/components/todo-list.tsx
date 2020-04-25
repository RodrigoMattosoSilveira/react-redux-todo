// External dependencies
import * as React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

// Internal dependencies
import { RootState } from '../reducers/rootReducer'
import {connect} from 'react-redux';
// import TodoItem from './todo-item'
import { TodoInterface } from "../interfaces/interfaces";
import {todo_delete, todo_toggle, todo_update} from "../actions/todo-actions";

/*
 * *****************************************************************************
 * This is the heart of the component
 * *****************************************************************************
 */

// Comment out if not used
// interface OwnProps {
// }

// Set to null if not used
function mapStateToProps (state: RootState) {
	return {
		todoList: state.todo_reducer.slice(0),
		visibilityFilter: state.visibility_filter_reducer
	};
}

// Set to null if not used
const mapDispatchToProps = {
	todo_toggle: (id: string) => todo_toggle(id),
	todo_update: (id: string, text: string) => todo_update(id, text),
	todo_delete: (text: string) => todo_delete(text)
}

// Hook them up; note that the static typing is constrained to what is in use
const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps
// type Props = StateProps & DispatchProps & OwnProps;

/*
 * *****************************************************************************
 * End of the heart of the component
 * *****************************************************************************
 */

function computeVisible (visibilityFilter: string, isCompleted: boolean ): string {
	console.log('TodoList/computeVisible visibilityFilter: ' + visibilityFilter)
    let className = 'show-todo-item';
    if ((visibilityFilter === 'open' && isCompleted) || (visibilityFilter === 'done' && !isCompleted)) {
        className = 'hide-todo-item';
    }
    return className;
}

const useStyles = makeStyles({
	table: {
		/* minWidth: 650, */
		tableLayout: "auto",
		width: "100%",
		'& .hide-todo-item': {
			display: 'none',
		},
	}
});

const computeState = (isCompleted: boolean) => {
	return isCompleted ? (
		<span className="todo-item-state todo-item-checked">✔</span>
	) : (
		<span className="todo-item-state todo-item-unchecked" />
	);
};

// TodoList component
const TodoList = (props: Props) => {
	const classes = useStyles();
	
	return (
		<div>
			<Divider />
	  <TableContainer component={Paper}>
		  <Table className={classes.table} size="small" aria-label="a dense table">
			  <TableBody>
				  {
					  props.todoList.length > 0
						  ?
						  (
							  props.todoList.map((todo: TodoInterface) => (
								  <TableRow key={todo.id} className={computeVisible(props.visibilityFilter, todo.isCompleted)}>
									  <TableCell
										  component="th"
										  scope="row"
										  onClick={() => props.todo_toggle(todo.id)}
									  >
										  {computeState(todo.isCompleted)}
									  </TableCell>
									  <TableCell className={"todo-item"}>
										  <TextField
											  id="standard-basic"
											  value={todo.text}
											  onChange={() => props.todo_update(todo.id, todo.text)}
											  fullWidth />
									  </TableCell>
									  <TableCell align="right" className={"todo-delete-me"}>
										  <IconButton
											  aria-label="delete"
											  onClick={() => props.todo_delete(todo.id)}
										  >
											  <DeleteIcon fontSize="small" />
										  </IconButton>
									  </TableCell>
								  </TableRow>
							  ))
						  )
						  :
						  (
							  <TableRow key='NONE'>
								  {/*<TableCell component="th" scope="row" className={"todo-is- completed"}> </TableCell>*/}
								  <TableCell className={"todo-item"} align={'center'}><div>You are done</div></TableCell>
								  {/*<TableCell align="right" className={"todo-delete-me"}> </TableCell>*/}
							  </TableRow>
						  )
				  }
			  </TableBody>
		  </Table>
	  </TableContainer>
		</div>
	
	)
}

export default connector(TodoList)
