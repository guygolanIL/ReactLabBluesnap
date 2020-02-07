import React, { useReducer } from "react";
import "./TodoCreator.css";

const initialState = {
    newTodoTitle: "",
    newTodoId: 0
};

const TodoCreatorReducer = (oldState, action) => {
    switch (action.type) {
        case "titleChange":
            return {
                ...oldState,
                newTodoTitle: action.title
            };

        case "createNewTodo":
            return {
                ...oldState,
                newTodoTitle: "",
                newTodoId: oldState.newTodoId + 1
            };

        default:
            return { ...oldState };
    }
};

const TodoCreator = props => {
    const [state, dispatch] = useReducer(TodoCreatorReducer, initialState);

    return (
        <div className="TodoCreator">
            <div
                style={{
                    margin: "auto"
                }}
            >
                <input
                    type="text"
                    className="TodoInput"
                    placeholder="Title"
                    value={state.newTodoTitle}
                    onChange={e =>
                        dispatch({ type: "titleChange", title: e.target.value })
                    }
                />

                <button
                    className="AddButton"
                    onClick={() => {
                        if (state.newTodoTitle) {
                            const newTodo = {
                                id: state.newTodoId,
                                title: state.newTodoTitle
                            };
                            console.log(`created new todo: `, newTodo);
                            props.onCreate(newTodo);

                            dispatch({
                                type: "createNewTodo"
                            });
                        }
                    }}
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default TodoCreator;
