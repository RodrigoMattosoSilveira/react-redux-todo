// Import dependencies
import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton, Box, Divider, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

// Import interfaces
import { todo_add } from '../actions/todo-actions';
import { connect, ConnectedProps } from 'react-redux';

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

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
	}),
);

// Todo form component
const TodoForm = (props: Props) => {
	const classes = useStyles();
	
	// // Create ref for form input
	// const inputRef = React.useRef<HTMLInputElement>(null);
	//
	// // Create form state
	// const [formState, setFormState] = React.useState('');
	//
	// // Handle todo input change
	// function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
	// 	// Update form state with the text from input
	// 	setFormState(event.target.value)
	// }
	
	// // Handle 'Enter' in todo input
	// function handleInputOnKeyPress(event: React.KeyboardEvent) {
	// 	// Check for 'Enter' key
	// 	if (event.key === 'Enter') {
	// 		// Dispatch
	// 		props.todo_add(formState)
	//
	// 		// Reset the input field
	// 		if (inputRef && inputRef.current) {
	// 			inputRef.current.value = '';
	// 		}
	// 	}
	// }
	const [textFieldValid, setTextFieldValid] = React.useState(true);
	const [textFieldValue, setTextFieldValue] = React.useState("");
	const [pristine, setPristine] = React.useState(true);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let valid = true;
		setPristine(false);
		setTextFieldValue(event.target.value);
		
		// If its length is zero
		if (event.target.value === "") {
			// its state is not valid
			valid = !valid;
		} else {
			// when the field has been touched and it has one or more characters
			// At leat one of these characters must be non blank
			valid = /.*\S.*/.test(event.target.value);
		}
		// console.log("value: " + event.target.value);
		// console.log("value length: " + event.target.value.length);
		// console.log("valid: " + valid);
		setTextFieldValid(valid);
	};
	const saveNewTodo = () => {
		console.log("Saving new todo: " + textFieldValue);
		setTextFieldValue("");
		setPristine(true);
		props.todo_add(textFieldValue);
	};
	return (
		// <div className="todo-form">
		// 	<input
		// 		ref={inputRef}
		// 		type="text"
		// 		placeholder='Enter new todo'
		// 		onChange={event => handleInputOnChange(event)}
		// 		onKeyPress={event => handleInputOnKeyPress(event)}
		// 	/>
		// </div>
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<div style={{ width: "100%" }}>
					<Box display="flex" flexDirection="row" p={1} m={1}>
						<Box p={1}>
							<TextField
								id="outlined-basic"
								label="Enter todo item"
								onChange={handleChange}
								error={!textFieldValid}
								helperText={
									textFieldValid
										? "Enter the new todo text and click Save"
										: "Todo text must have at least one non-blank character"
								}
								value={textFieldValue}
							/>
						</Box>
						<Divider orientation="vertical" flexItem />
						<Box p={1}>
							<IconButton
								color="primary"
								disabled={pristine || !textFieldValid}
								aria-label="directions"
								onClick={saveNewTodo}
							>
								<SaveIcon />
							</IconButton>
						</Box>
					</Box>
				</div>
			</form>
		</div>
	)
}

export default connector(TodoForm)
