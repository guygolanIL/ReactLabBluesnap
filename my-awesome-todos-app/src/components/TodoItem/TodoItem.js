import React from 'react';
import "./TodoItem.css";

const TodoItem = (props) => (
    <div className="TodoItem">
        <div>
            {props.title}
        </div>
    </div>
);

export default TodoItem;