// Import dependencies
import * as React from 'react';

import { VISIBILITY_FILTER_TYPES } from '../reference/references';

// Import interfaces
import { VisibilityFiltersInterface } from './../interfaces/interfaces'

function computeClassNames (myVisibilityFilter: string): string {
    return 'btn ' + myVisibilityFilter;
}

function isDisabled (myVisibilityFilter: string, propVisibilityFilter: string ): boolean {

    return myVisibilityFilter === propVisibilityFilter ? true : false;
}

// TodoList component
const VisibilityFilters = (props: VisibilityFiltersInterface) => {
  return (
    <div className="visibility-filter">
        <span>Show: </span>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.ALL)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.ALL, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_FILTER_TYPES.ALL)}>{VISIBILITY_FILTER_TYPES.ALL}
        </button>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.OPEN)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.OPEN, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_FILTER_TYPES.OPEN)}>{VISIBILITY_FILTER_TYPES.OPEN}
        </button>
        <button
            className={computeClassNames(VISIBILITY_FILTER_TYPES.DONE)}
            disabled={isDisabled(VISIBILITY_FILTER_TYPES.DONE, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_FILTER_TYPES.DONE)}>{VISIBILITY_FILTER_TYPES.DONE}
        </button>
    </div>
  )
}
export default VisibilityFilters
