// Import external dependencies
import * as React from 'react';
import {connect} from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Import internal dependencies
import {RootState} from "../reducers/rootReducer";
import { VISIBILITY_FILTER_TYPES } from '../reference/references';
import { visibility_action_set } from "../actions/visibility-filter-actions";

/*
 * *****************************************************************************
 * Start of the heart of the component
 * *****************************************************************************
 */
// interface OwnProps {
// }

function mapStateToProps (state: RootState) {
	return {
		visibilityFilter: state.visibility_filter_reducer
	};
}

const mapDispatchToProps = {
	visibility_action_set: (filter: string) => visibility_action_set(filter)
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
// type Props = StateProps & DispatchProps & OwnProps;
type Props = StateProps & DispatchProps;
/*
 * *****************************************************************************
 * End of heart of the component
 * *****************************************************************************
 */

/*
 * *****************************************************************************
 * Styling
 * *****************************************************************************
 */
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
			},
			'& .all-todo-items': {
				color: 'orange',
			},
			'& .open-todo-items': {
				color: 'red',
			},
			'& .done-todo-items': {
				color: 'green',
			}
		},
	}),
);

// Local methods
function computeClassNames (myVisibilityFilter: string): string {
    return 'btn ' + myVisibilityFilter ;
}
function isDisabled (myVisibilityFilter: string, propVisibilityFilter: string ): boolean {
    return myVisibilityFilter === propVisibilityFilter;
}

// VisibilityFilter component
const VisibilityFilters = (props: Props) => {
	const classes = useStyles();
  return (
    <div className={classes.root}>
        <span>Show: </span>
		<Button
			variant="outlined"
			className={'all-todo-items'}
			disabled={isDisabled(VISIBILITY_FILTER_TYPES.ALL, props.visibilityFilter)}
			onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.ALL)}>{VISIBILITY_FILTER_TYPES.ALL}
		</Button>
		<Button
			variant="outlined"
			className={'open-todo-items'}
			disabled={isDisabled(VISIBILITY_FILTER_TYPES.OPEN, props.visibilityFilter)}
			onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.OPEN)}>{VISIBILITY_FILTER_TYPES.OPEN}
		</Button>
		<Button
			variant="outlined"
			className={'done-todo-items'}
			disabled={isDisabled(VISIBILITY_FILTER_TYPES.DONE, props.visibilityFilter)}
			onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.DONE)}>{VISIBILITY_FILTER_TYPES.DONE}
		</Button>
    </div>
  )
}
export default connector(VisibilityFilters)
