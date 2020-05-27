import shortid from 'shortid';

import { todo_reducer }  from './todo-reducer';
import { TODO_ACTIONS } from '../reference/references';
import { TodoActionInterface, TodoInterface } from '../interfaces/interfaces';

describe('todo-reducers', () => {
    it('should handle initial state', () => {
        const todAction: TodoActionInterface = {type:  'INVALID', id: 'ignore', text: 'text', priority: 'LOW'}
        expect(todo_reducer(undefined, todAction)).toEqual([])
    })
    it('should handle CREATE', () => {
        const todoActionType = TODO_ACTIONS.CREATE;
        const todoActionId = shortid.generate();
        const todoActionText = 'text';
		const todoActionPriority = 'LOW'
        const todoAction = {type:  todoActionType, id: todoActionId, text: todoActionText, priority: todoActionPriority}
        const state = todo_reducer([], todoAction)
        expect(state.length).toEqual(1);

        const todo = state[0];
        expect (Object.keys(todo).length).toEqual(3);
        expect (Object.keys(todo).indexOf('id')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('text')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('isCompleted')).toBeGreaterThan(-1);

        expect (todo.id).toBe(todoActionId);
        expect (todo.text).toBe(todoActionText);
        expect (todo.isCompleted).toBe(false);
		expect (todo.priority).toBe(todoActionPriority);
    });
    it('should handle TOGGLE', () => {
        // set the state
        const todoId = shortid.generate();
        const todoText = 'text';
		const todoActionPriority = 'LOW';
        let todo: TodoInterface = {id: todoId, text: todoText, isCompleted: false, priority: todoActionPriority};
        let state: TodoInterface[] = [];
        state.push(todo);

        const todoAction = {type:  TODO_ACTIONS.TOGGLE, id: todoId, text: todoText, priority: todoActionPriority}
        state = todo_reducer(state, todoAction);
        expect (Object.keys(state).length).toEqual(1);
        todo = state[0];
        expect (Object.keys(todo).length).toEqual(3);
        expect (Object.keys(todo).indexOf('id')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('text')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('isCompleted')).toBeGreaterThan(-1);
		expect (Object.keys(todo).indexOf('priority')).toBeGreaterThan(-1);

        expect (todo.id).toBe(todoId);
        expect (todo.text).toBe(todoText);
        expect (todo.isCompleted).toBe(true);
		expect (todo.priority).toBe(todoActionPriority);
    });
    it('should handle UPDATE', () => {
        // set the state
        const todoId = shortid.generate();
        const todoText = 'text';
		const todoActionPriority = 'LOW';
        let todo: TodoInterface = {id: todoId, text: todoText, isCompleted: false, priority: todoActionPriority};
        let state: TodoInterface[] = [];
        state.push(todo);

        const todoUpdatedText = 'Updated text'
        const todoAction = {type:  TODO_ACTIONS.UPDATE, id: todoId, text: todoUpdatedText, priority: todoActionPriority}
        state = todo_reducer(state, todoAction);
        expect (Object.keys(state).length).toEqual(1);
        todo = state[0];
        expect (Object.keys(todo).length).toEqual(3);
        expect (Object.keys(todo).indexOf('id')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('text')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('isCompleted')).toBeGreaterThan(-1);
		expect (Object.keys(todo).indexOf('priority')).toBeGreaterThan(-1);

        expect (todo.id).toBe(todoId);
        expect (todo.text).toBe(todoUpdatedText);
        expect (todo.isCompleted).toBe(false);
		expect (todo.priority).toBe(todoActionPriority);
    });
    it('should handle DELETE', () => {
        // set the state
        const todoId1 = shortid.generate();
        const todoText1 = 'text 1'
		const todoActionPriority = 'MEDIUM';
        let todo: TodoInterface = {id: todoId1, text: todoText1, isCompleted: false, priority: todoActionPriority};
        let state: TodoInterface[] = [];
        state.push(todo);

        const todoId2 = shortid.generate();
        const todoText2 = 'text 2'
		const todoActionPriority2 = 'HIGH';
        todo = {id: todoId2, text: todoText2, isCompleted: false, priority: todoActionPriority2};
        state.push(todo);

        const todoAction = {type:  TODO_ACTIONS.DELETE, id: todoId1, text: todoText2, priority: todoActionPriority2}
        state = todo_reducer(state, todoAction);
        expect (Object.keys(state).length).toEqual(1);
        todo = state[0];
        expect (Object.keys(todo).length).toEqual(3);
        expect (Object.keys(todo).indexOf('id')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('text')).toBeGreaterThan(-1);
        expect (Object.keys(todo).indexOf('isCompleted')).toBeGreaterThan(-1);
		expect (Object.keys(todo).indexOf('priority')).toBeGreaterThan(-1);

        expect (todo.id).toBe(todoId2);
        expect (todo.text).toBe(todoText2);
        expect (todo.isCompleted).toBe(false);
		expect (todo.priority).toBe(todoActionPriority2);
    });
});
