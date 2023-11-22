import React from 'react'
import img from "../assets/Post-img1.png";
import TodoListItem from './TodoListItem';

const TodoList = ({title, complated}) => {
  return (
    <ul>
        <TodoListItem title={title} complated={complated} />
    </ul>
  );
};

export default TodoList;