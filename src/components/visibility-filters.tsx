// Import dependencies
import * as React from 'react';

import { VISIBILITY_TYPES } from '../reference/references';

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
            className={computeClassNames(VISIBILITY_TYPES.ALL)}
            disabled={isDisabled(VISIBILITY_TYPES.ALL, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.ALL)}>{VISIBILITY_TYPES.ALL}
        </button>
        <button
            className={computeClassNames(VISIBILITY_TYPES.OPEN)}
            disabled={isDisabled(VISIBILITY_TYPES.OPEN, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.OPEN)}>{VISIBILITY_TYPES.OPEN}
        </button>
        <button
            className={computeClassNames(VISIBILITY_TYPES.DONE)}
            disabled={isDisabled(VISIBILITY_TYPES.DONE, props.visibilityFilter)}
            onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.DONE)}>{VISIBILITY_TYPES.DONE}
        </button>
    </div>
  )
}
export default VisibilityFilters
