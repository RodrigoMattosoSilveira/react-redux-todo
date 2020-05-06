import { VISIBILITY_FILTER_ACTIONS } from '../reference/references';
import { VisibilityFilterActionInterface } from '../interfaces/interfaces';

export const visibility_action_set = (filter: string): VisibilityFilterActionInterface => ({
  type: VISIBILITY_FILTER_ACTIONS.SET,
  filter: filter
})
