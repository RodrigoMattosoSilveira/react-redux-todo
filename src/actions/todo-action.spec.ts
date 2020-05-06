import * as actions from './todo-actions'
import { TODO_ACTIONS } from '../reference/references';

describe('todo actions', () => {
    it('todo_add should create CREATE action', () => {
        const todoText = 'Use Redux'
        const todoAction = actions.todo_add(todoText);
        expect (Object.keys(todoAction).length).toEqual(3);
        expect (Object.keys(todoAction).indexOf('type')).toBeGreaterThan(-1);
        expect (Object.keys(todoAction).indexOf('id')).toBeGreaterThan(-1);
        expect (Object.keys(todoAction).indexOf('text')).toBeGreaterThan(-1);
        expect (todoAction.type).toBe(TODO_ACTIONS.CREATE);
        expect (todoAction.text).toBe(todoText);
    });

    it('todo_toggle should create TOGGLE action', () => {
        const idString = 'id-string';
        expect(actions.todo_toggle(idString)).toEqual({
            type: TODO_ACTIONS.TOGGLE,
            id: idString,
            text: 'ignore'
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
            id: idString,
            text: 'ignore'
        })
    });

    // it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    // expect(actions.setVisibilityFilter('active')).toEqual({
    // type: 'SET_VISIBILITY_FILTER',
    // filter: 'active'
    // })
    // })
});
