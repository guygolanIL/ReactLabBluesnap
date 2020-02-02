import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoCreator from '../TodoCreator/TodoCreator';
import "./TodoList.css"

class TodoList extends React.Component {

    state = {
        todos: []
    };

    getTodosItems() {
        return this.state.todos.map(todo => (<TodoItem key={todo.id} title={todo.title}></TodoItem>));
    }

    todoCreateHandler(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="TodoList">
                <h1 className="Title">My Todo List</h1>
                <TodoCreator onCreate={(newTodo) => {
                    this.todoCreateHandler(newTodo);
                }} />
                {this.getTodosItems()}
            </div>
        );
    }
}

export default TodoList;