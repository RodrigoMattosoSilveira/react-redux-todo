// Import dependencies
import * as React from 'react';

// Import interfaces
import { todo_add } from '../actions/todo-actions';
import { connect, ConnectedProps } from 'react-redux'

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
}

const mapStateToProps = null;

const mapDispatchToProps = {
	todo_add: (text: string) => todo_add(text)
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

// Todo form component
const TodoForm = (props: Props) => {
	// Create ref for form input
	const inputRef = React.useRef<HTMLInputElement>(null);
	
	// Create form state
	const [formState, setFormState] = React.useState('');
	
	// Handle todo input change
	function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		// Update form state with the text from input
		setFormState(event.target.value)
	}
	
	
	// Handle 'Enter' in todo input
	function handleInputOnKeyPress(event: React.KeyboardEvent) {
		// Check for 'Enter' key
		if (event.key === 'Enter') {
			// Dispatch
			props.todo_add(formState)
			
			// Reset the input field
			if (inputRef && inputRef.current) {
				inputRef.current.value = '';
			}
		}
	}
	return (
		<div className="todo-form">
			<input
				ref={inputRef}
				type="text"
				placeholder='Enter new todo'
				onChange={event => handleInputOnChange(event)}
				onKeyPress={event => handleInputOnKeyPress(event)}
			/>
		</div>
	)
}

export default connector(TodoForm)
