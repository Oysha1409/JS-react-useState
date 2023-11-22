import React from 'react'

const TodoListItem = ({title, complated}) => {
  return (
    <li>
        <span>{title}</span>
        {complated ? "👍" : "X"}
    </li>
  );
};

export default TodoListItem;