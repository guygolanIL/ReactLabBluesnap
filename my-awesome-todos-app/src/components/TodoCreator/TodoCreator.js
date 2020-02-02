import React from 'react';
import "./TodoCreator.css";

class TodoCreator extends React.Component {

    state = {
        newTodoTitle: '',
        newTodoId: 0
    }

    render() {
        return (
            <div className="TodoCreator">

                <div style={{
                    margin: 'auto'
                }}>
                    <input
                        type="text"
                        className="TodoInput"
                        placeholder="Title"
                        value={this.state.newTodoTitle}
                        onChange={(e) => {
                            this.setState({
                                newTodoTitle: e.target.value
                            });
                        }}
                    />

                    <button className="AddButton" onClick={() => {
                        if (this.state.newTodoTitle) {
                            const newTodo = {
                                id: this.state.newTodoId,
                                title: this.state.newTodoTitle
                            }
                            this.setState({
                                newTodoId: this.state.newTodoId + 1
                            }, () => {
                                console.log(`created new todo: `, newTodo);
                                this.props.onCreate(newTodo);
                                this.setState({
                                    newTodoTitle: ''
                                })
                            });
                        }
                    }}>
                        ADD
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoCreator;