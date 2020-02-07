import React, { useReducer } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoCreator from '../TodoCreator/TodoCreator';
import "./TodoList.css"

const TodoListReducer = (oldState, action) => {
    switch(action.type) {
        case 'removeTodoWithId': 
        console.log(`removing todo with id: ${action.id}`)
        return {
            todos: oldState.todos.filter(todo => todo.id !== action.id)
        }

        case 'addTodo':
            return {
                ...oldState,
                todos: [...oldState.todos, action.newTodo]
            }

        default: 
        return {
            ...oldState
        }
    }
};

const  TodoList = (props) => {

    const [state, dispatch] = useReducer(TodoListReducer, {todos: []});

        return (
            <div className="TodoList">
                <h1 className="Title">My Todo List</h1>
                <TodoCreator onCreate={newTodo => dispatch({ type: 'addTodo', newTodo }) }/>
                {
                    state.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            title={todo.title}
                            onClick={() => dispatch({ type: 'removeTodoWithId', id: todo.id})}>
                        </TodoItem>))
                }
            </div>
        );
}

export default TodoList;