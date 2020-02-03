import React from 'react';
import "./TodoItem.css";

const TodoItem = (props) => (
    <div className="TodoItem" onClick={props.onClick}>
        <div>
            {props.title}
        </div>
    </div>
);

export default TodoItem;