// External Dependencies
import * as React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

// Internal Dependencies
import TodoApp from "./components/todo-app";
import {rootReducer} from "./reducers/rooReducer";

const store = createStore(rootReducer)

const Root = () => (
	<Provider store={store}>
		<TodoApp
		/>
	</Provider>
);

render(<Root />, document.getElementById("root"));
