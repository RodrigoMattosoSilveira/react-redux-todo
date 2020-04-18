import * as actions from './visibility-filter-actions'
import { VISIBILITY_FILTER_ACTIONS } from '../reference/references';
import { VISIBILITY_FILTER_TYPES } from '../reference/references';

describe('visibility filter actions', () => {
    describe('visibility_filer_set should create SET action for', () => {
        it('ALL filter', () => {
            expect(actions.visibility_action_set(VISIBILITY_FILTER_TYPES.ALL)).toEqual({
                type: VISIBILITY_FILTER_ACTIONS.SET,
                filter: VISIBILITY_FILTER_TYPES.ALL
            })
        });
        it('DONE filter', () => {
            expect(actions.visibility_action_set(VISIBILITY_FILTER_TYPES.DONE)).toEqual({
                type: VISIBILITY_FILTER_ACTIONS.SET,
                filter: VISIBILITY_FILTER_TYPES.DONE,
            })
        });
        it('OPEN filter', () => {
            expect(actions.visibility_action_set(VISIBILITY_FILTER_TYPES.OPEN)).toEqual({
                type: VISIBILITY_FILTER_ACTIONS.SET,
                filter: VISIBILITY_FILTER_TYPES.OPEN,
            })
        });
    });
});
