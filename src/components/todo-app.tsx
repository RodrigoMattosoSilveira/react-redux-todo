// External Dependencies
import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



// Internal Dependencies
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import VisibilityFilters from "./visibility-filters";
import "../styles/styles.css";

// import classes from "*.module.scss";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const TodoApp = () => {
	console.log('TodoApp: Loading the app')
	const classes = useStyles();
	return (
		<div className="todo-list-app">
			{/* <h1 className="todo-header">todo</h1>*/}
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h5" className={classes.title}>
							React Redux TS Material UI Todo List
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
			<TodoForm />
			<TodoList
				// todoList={todoList}
				// visibilityFilter={visibilityFilter}
			/>
			<VisibilityFilters />
		</div>
	)
}
export default TodoApp
