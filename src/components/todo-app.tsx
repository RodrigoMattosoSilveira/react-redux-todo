// External Dependencies
import * as React from "react";
import {connect, useSelector} from "react-redux";

// Internal Dependencies
import {RootState} from "../reducers/rooReducer";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import VisibilityFilters from "./visibility-filters";
import "../styles/styles.css";


const TodoApp = () => {
	const todoList  = useSelector((state: RootState) => state.todo_reducer);
	const visibilityFilter  = useSelector((state: RootState) => state.visibility_filter_reducer);
	
	return (
		<div className="todo-list-app">
			<h1 className="todo-header">todo</h1>
			<TodoForm />
			<TodoList
				todoList={todoList}
				visibilityFilter={visibilityFilter}
			/>
			<VisibilityFilters />
		</div>
	)
}
export default TodoApp
