import * as actions from './todo-actions'
import { TODO_ACTIONS } from '../reference/references';

describe('todo actions', () => {
    it('todo_add should create CREATE action', () => {
        expect(actions.todo_add('Use Redux')).toEqual({
            type: TODO_ACTIONS.CREATE,
            text: 'Use Redux'
        })
    });

    it('todo_toggle should create TOGGLE action', () => {
        const idString = 'id-string';
        expect(actions.todo_toggle(idString)).toEqual({
            type: TODO_ACTIONS.TOGGLE,
            id: idString
        })
    });

    it('todo_update should create UPDATE action', () => {
        const idString = 'id-string';
        const newText = 'new text';
        expect(actions.todo_update(idString, newText)).toEqual({
            type: TODO_ACTIONS.UPDATE,
            id: idString,
            text: newText
        })
    });

    it('tododelete should create DELETE action', () => {
        const idString = 'id-string';
        expect(actions.todo_delete(idString)).toEqual({
            type: TODO_ACTIONS.DELETE,
            id: idString
        })
    });

    // it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    // expect(actions.setVisibilityFilter('active')).toEqual({
    // type: 'SET_VISIBILITY_FILTER',
    // filter: 'active'
    // })
    // })
});
