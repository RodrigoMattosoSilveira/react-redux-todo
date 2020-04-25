// Import external dependencies
import * as React from 'react';
import {connect} from 'react-redux';

// Import internal dependencies
import {RootState} from "../reducers/rootReducer";
import { VISIBILITY_FILTER_TYPES } from '../reference/references';
import { visibility_action_set } from "../actions/visibility-filter-actions";

// Local methods
function computeClassNames (myVisibilityFilter: string): string {
    return 'btn ' + myVisibilityFilter;
}
function isDisabled (myVisibilityFilter: string, propVisibilityFilter: string ): boolean {
    return myVisibilityFilter === propVisibilityFilter;
}

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


// TodoList component
const VisibilityFilters = (props: Props) => {
  return (
    <div className="visibility-filter">
        <span>Show: </span>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.ALL)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.ALL, props.visibilityFilter)}
            onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.ALL)}>{VISIBILITY_FILTER_TYPES.ALL}
        </button>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.OPEN)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.OPEN, props.visibilityFilter)}
            onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.OPEN)}>{VISIBILITY_FILTER_TYPES.OPEN}
        </button>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.DONE)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.DONE, props.visibilityFilter)}
            onClick={() => props.visibility_action_set(VISIBILITY_FILTER_TYPES.DONE)}>{VISIBILITY_FILTER_TYPES.DONE}
        </button>
    </div>
  )
}
export default connector(VisibilityFilters)
