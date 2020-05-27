// Import dependencies
import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

// Import interfaces
import { todo_add } from '../actions/todo-actions';
import { connect, ConnectedProps } from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
}

const mapStateToProps = null;

const mapDispatchToProps = {
	todo_add: (text: string, priority: string) => todo_add(text, priority)
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		table: {
			/* minWidth: 650, */
			tableLayout: "auto",
			width: "100%",
			'& .hide-todo-item': {
				display: 'none',
			},
		},
		todoTextFont: {
			fontSize: "1rem",
		},
		todoPriority: {
			width: "32px"
		},
		todoPriorityFont: {
			fontSize: "1rem"
		},
		button: {
			margin: theme.spacing(1),
		},
	}),
);

// Todo form component
const TodoForm = (props: Props) => {
	// console.log('TodoForm: Loading the app')
	const classes = useStyles();
	const [textFieldValid, setTextFieldValid] = React.useState(true);
	const [textFieldValue, setTextFieldValue] = React.useState("");
	const [pristine, setPristine] = React.useState(true);
	const [priorityFieldValue, setPriorityFieldValue] = React.useState('LOW');
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
		props.todo_add(textFieldValue, priorityFieldValue);
		setTextFieldValue("");
		setPristine(true);
		setPriorityFieldValue('LOW')
	};
	return (
		<div className={classes.root} style={{marginTop: '10px', marginBottom: '10px'}}>
			<form noValidate autoComplete="off">
				<div>
					<TableContainer component={Paper}>
						<Table className={classes.table} size="small" aria-label="a dense table">
							<TableBody>
								<TableRow>
									<TableCell className={classes.todoTextFont}>
										<TextField
											id="standard-basic"
											value={textFieldValue}
											onChange={handleChange}
											error={!textFieldValid}
											helperText={
												textFieldValid
													? "Text"
													: "Must have at least one non-blank character"
											}
											fullWidth
										/>
									</TableCell>
									<TableCell className={classes.todoPriority}>
										<Select className={classes.todoPriorityFont}
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={priorityFieldValue}
												onChange={(event: React.ChangeEvent<{ value: unknown }>) => setPriorityFieldValue(event.target.value as string)}
										>
											<MenuItem value={'LOW'}>LOW</MenuItem>
											<MenuItem value={'MEDIUM'}>MEDIUM</MenuItem>
											<MenuItem value={'HIGH'}>HIGH</MenuItem>
										</Select>
										<FormHelperText>Priority</FormHelperText>
									</TableCell>
									<TableCell align="right" className={"todo-delete-me"}>
										<Button
											variant="contained"
											color="primary"
											size="small"
											className={classes.button}
											disabled={pristine || !textFieldValid}
											startIcon={<SaveIcon />}
											onClick={saveNewTodo}
										>
											Save
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</form>
		</div>
	)
}

export default connector(TodoForm)
